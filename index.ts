import fs from 'fs/promises';
import { builtinModules } from 'node:module';
import { createFixture } from 'fs-fixture';
import { execa } from 'execa';
import commentMark from 'comment-mark';

const code = (string: string) => `\`\`\`js\n${string}\n\`\`\``;

const table = (
	rows: string[][],
	disableHeaders?: boolean,
) => {
	let html = '<table>';
	
	if (!disableHeaders) {
		const headers = rows.shift()!.map((cell) => `<th>${cell}</th>`).join('');
		html += `<tr>${headers}</tr>`;
	}

	html += rows.map(
		(columns) => `<tr>${columns.map((cell) => `<td valign="top">\n\n${cell}\n\n</td>`).join('')
	}</tr>`).join('\n')
	
	return html + '</table>';	
};

(async () => {
	const files = builtinModules.map(
		(m) => [
			m.replace(/\//g, '_') + '.mjs',
			`
			import * as all from '${m}';
			import { inspect } from './inspect.mjs';
			console.log(inspect(all));
			`,
		],
	);

	const fixture = await createFixture({
		...Object.fromEntries(files),
		'inspect.mjs': await fs.readFile('inspect.mjs', 'utf8'),
	});

	const output = await Promise.all(
		files.map(async ([file], index) => {
			const spawnOptions = {
				cwd: fixture.path,
				reject: false,
				all: true,
			};

			const [
				{ all: nodeOutput },
				{ all: bunOutput }
			] = await Promise.all([
				execa('node', [file], spawnOptions),
				execa('bun', [file], spawnOptions),
			]);

			return `## ${
				builtinModules[index]
			}\n\n${
				table([
					['Node.js', 'Bun'],
					[code(nodeOutput!), code(bunOutput!)],
				])
			}`;
		}),
	);

	await fixture.rm();

	let readme = await fs.readFile('README.md', 'utf8');

	const builtinsList = builtinModules.map(m => `- [\`${m}\`](#${m.replaceAll('/', '')})`);
	const divide = Math.floor(builtinsList.length / 3);
	const builtins = table(
		[
			[
				builtinsList.slice(0, divide).join('\n'),
				builtinsList.slice(divide, divide * 2).join('\n'),
				builtinsList.slice(divide * 2).join('\n'),
			],
		],
		true,
	);

	const [
		{ stdout: nodeVersion },
		{ stdout: bunVersion },
	] = await Promise.all([
		execa('node', ['--version']),
		execa('bun', ['--version']),
	]);

	const date = (new Date()).toLocaleDateString('en-US', { year:"numeric", month:"short", day: 'numeric' });

	readme = commentMark(readme, {
		lastUpdated: `${date} with Bun ${bunVersion} Node.js ${nodeVersion}`,
		builtins,
		comparison: output.join('\n\n'),
	});

	await fs.writeFile('README.md', readme);
})();
