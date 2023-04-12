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
			value = `${value.slice(0, 100)}…`;
		}
		return JSON.stringify(value);
	}

	if (['number', 'boolean', 'symbol'].includes(valueType)) {
		return value.toString();
	}

	if (
		valueType === 'object'
		|| valueType === 'function'
	) {
		if (cache.has(value)) {
			return `[Circular: *${cache.get(value)}]`;
		}

		const objectId = cache.size + 1;
		cache.set(value, objectId);

		let serialized = `<ref *${objectId}> `;

		if (value instanceof RegExp) {
			serialized += value.toString();
		} else if (Array.isArray(value)) {
			const entries = value.map(
				item => `${indentLevel + indentation}${inspect(item, indentLevel + indentation, cache)}`,
			);

			serialized += '[';

			if (entries.length > 0) {
				serialized += `\n${entries.join(',\n')}\n${indentLevel}`;
			}

			serialized += ']';
		} else {
			if (valueType === 'function') {
				const functionString = value.toString();

				if (functionString.startsWith('class') && functionString.endsWith('}')) {
					serialized += `[class ${value.name}]`;
				} else {
					let functionType = 'ƒ';
					if (functionString.startsWith('async ')) {
						functionType = `async ${functionType}`;
					}

					serialized += `${functionType} ${value.name || ''}(length: ${value.length}) `;
				}
			} else if (value.constructor !== Object) {
				if (!value.constructor) {
					serialized += '[Object: null prototype] ';
				} else {
					serialized += `${value.constructor.name} `;
				}
			}

			const entries = Reflect.ownKeys(value).map(
				(key) => {
					const descriptor = Object.getOwnPropertyDescriptor(value, key);
					if (!descriptor.enumerable) {
						return;
					}

					const getSet = [];
					if ('get' in descriptor) {
						getSet.push('get');
					}
					if ('set' in descriptor) {
						getSet.push('set');
					}

					const propertyValue = value[key];
					return `${indentLevel}${indentation}${
						getSet.length > 0 ? `[${getSet.join('/')}] ` : ''
					}${key.toString()}: ${
						inspect(propertyValue, indentLevel + indentation, cache).trim()
					}`;
				},
			).filter(Boolean);

			serialized += '{';

			if (entries.length > 0) {
				serialized += `\n${entries.join(',\n')}\n${indentLevel}`;
			}

			serialized += '}';
		}

		// Root-level call
		if (indentLevel === '') {
			for (const referenceId of cache.values()) {
				if (!serialized.includes(`[Circular: *${referenceId}]`)) {
					serialized = serialized.replaceAll(`<ref *${referenceId}> `, '');
				}
			}
		}

		/**
		 * The `module` core module was using this character in the module path
		 * and was breaking code blocks on GitHub
		 */
		return serialized.replaceAll('\u0000', '');
	}

	return `[Unexpected Error: ${value.toString()} (type ${JSON.stringify(valueType)})]`;
};

// import * as _ from 'http';
// console.log(_);
// console.log(inspect(_));
