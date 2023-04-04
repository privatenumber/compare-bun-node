const indentation = '    ';

export const inspect = (
	value,
	indentLevel = '',
	cache = new Map(),
) => {
	if (value === undefined) {
		return 'undefined';
	}

	if (value === null) {
		return 'null';
	}

	const valueType = typeof value;

	if (valueType === 'string') {
		if (value.length > 100) {
			value = value.slice(0, 100) + '…';
		}
		return JSON.stringify(value);
	}

	if (['number', 'boolean', 'symbol'].includes(valueType)) {
		return value.toString();
	}

	if (valueType === 'object') {
		if (cache.has(value)) {
			return `[Circular: *${cache.get(value)}]`;
		}

		const objectId = cache.size + 1;
		cache.set(value, objectId);

		let serialized = '';

		if (Array.isArray(value)) {
			const entries = value.map(
				(item) => `${indentLevel + indentation}` + inspect(item, indentLevel + indentation, cache),
			);

			serialized += '[';

			if (entries.length > 0) {
				serialized += '\n' + entries.join(',\n') + '\n' + indentLevel;
			}

			serialized += ']';
		} else if (value instanceof RegExp) {
			return value.toString();
		} else {
			if (value.constructor !== Object) {
				if (!value.constructor) {
					serialized += '[Object: null prototype] ';
				} else {
					serialized += value.constructor.name + ' ';
				}
			}

			const entries = Reflect.ownKeys(value).map(
				(key) => `${indentLevel}${indentation}${key.toString()}: ${
					inspect(value[key], indentLevel + indentation, cache).trim()
				}`,
			);

			serialized += '{';

			if (entries.length > 0) {
				serialized += '\n' + entries.join(',\n') + '\n' + indentLevel;
			}

			serialized += '}';
		}

		if (serialized.includes(`[Circular: *${objectId}]`)) {
			serialized = `<ref *${objectId}> ${serialized}`;
		}

		// the `module` core module was using this character in the module path, and was breaking code blocks on GitHub
		return serialized.replaceAll('\x00','');
	}

	if (valueType === 'function') {
		const functionString = value.toString();
		const functionType = functionString.startsWith('async ') ? 'AsyncFunction' : 'Function';
		return `[${functionType}: ${value.name} { length: ${value.length} }]`;
	}

	return '[Unexpected Error: ' + value.toString() + ' (type ' + JSON.stringify(valueType) + ')]';
};

// import * as _ from 'buffer';
// console.log(inspect(_));
