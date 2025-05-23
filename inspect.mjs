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

				const classPrefix = 'class ';
				if (functionString.startsWith(classPrefix) && functionString.endsWith('}')) {
					const className = functionString.slice(classPrefix.length, functionString.indexOf('{')).trim();
					serialized += `class ${className} `;
				} else {
					let functionType = 'ƒ';
					if (functionString.startsWith('async ')) {
						functionType = `async ${functionType}`;
					}

					serialized += `${functionType} ${value.name || ''}(length: ${value.length}) `;
				}
			} else if (value.constructor !== Object) {
				if (value.constructor) {
					serialized += `${value.constructor.name} `;
				} else {
					serialized += '[Object: null prototype] ';
				}
			}

			serialized += '{';
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

					try {
						const propertyValue = value[key];
						return `${indentLevel}${indentation}${
							getSet.length > 0 ? `[${getSet.join('/')}] ` : ''
						}${key.toString()}: ${
							inspect(propertyValue, indentLevel + indentation, cache).trim()
						}`;	
					} catch (error) {
						return `${indentLevel}${indentation}${key.toString()}: [Error accessing: ${error.message}]`;
					}
				},
			).filter(Boolean);

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

// import * as _ from 'events';
// console.log(_);
// console.log(inspect(_));
