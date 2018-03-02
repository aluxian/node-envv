'use strict';

/**
 * @param {string} name the name of the env var to retrieve, as found in process.env
 * @param {any} [defaultValue] return this value if process.env[name] is undefined
 * @return {any} the env value or defaultValue, whichever is defined
 * @throws if both the env value and defaultValue are undefined
 */
function envv (name, defaultValue) {
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

  return value;
}

module.exports = envv;
