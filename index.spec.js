'use strict';

/* eslint-env jest */
const envv = require('./');

describe('envv', () => {
  it('should throw an error if function arguments are invalid', () => {
    expect(() => envv()).toThrow();
    expect(() => envv(5)).toThrow();
    expect(() => envv('')).toThrow();
    expect(() => envv('ENVV_TEST', 'whatever', String, 'extra')).toThrow();
  });

  it('should return the env value if it is given', () => {
    process.env.ENVV_TEST = 'yes';
    expect(envv('ENVV_TEST')).toEqual('yes');
    expect(envv('ENVV_TEST', 'whatever')).toEqual('yes');
  });

  it('should return the default value if the env value is not given', () => {
    delete process.env.ENVV_TEST;
    expect(envv('ENVV_TEST', 'whatever')).toEqual('whatever');
  });

  it('should throw if neither the env value nor the default value are given', () => {
    delete process.env.ENVV_TEST;
    expect(() => envv('ENVV_TEST')).toThrow();
  });
});
