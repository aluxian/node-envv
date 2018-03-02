'use strict';

/**
 * @param {string} name the name of the env var to retrieve, as found in process.env
 * @param {any} [defaultValue] return this value if process.env[name] is undefined
 * @param {any} [parseAsType] try to parse the value as this type before returning it
 * @return {any} the env value or defaultValue, whichever is defined
 * @throws if both the env value and defaultValue are undefined
 */
function envv (name, defaultValue = undefined, parseAsType = undefined) {
  if (!name) throw new Error(`envv() argument 'name' is required`);
  if (typeof name !== 'string') throw new TypeError(`envv() argument 'name' must be a string`);
  if (arguments.length > 2) throw new Error(`envv() expected at most 2 arguments`);

  let value = process.env[name];

  // fallback to defaultValue
  if (value === undefined) {
    value = defaultValue;
  }

  // fallback to error
  if (value === undefined) {
    throw new Error(`env var '${name}' is missing`);
  }

  // try to parse
  switch (parseAsType) {
    case Boolean:
      if (typeof value === 'string') {
        value = value.toLowerCase();
      }
      value = JSON.parse(value);
      break;

    case String:
      value = String(value);
      break;
  }

  return value;
}

module.exports = envv;
