# envv

[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://circleci.com/gh/aluxian/node-envv)
[![codecov](https://codecov.io/gh/aluxian/node-envv/branch/master/graph/badge.svg)](https://codecov.io/gh/aluxian/node-envv)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-blue.svg)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/envv.svg)](https://www.npmjs.com/package/envv)
[![License MIT](https://img.shields.io/npm/l/envv.svg)](LICENSE)
[![Bitcoin Donate](https://img.shields.io/badge/bitcoin-donate-orange.svg)](https://keybase.io/aluxian)

Simple util for config files that checks and returns an env var.

## Installation

```sh
$ npm install envv
```

## Usage

```js
// config.js
const envv = require('envv');

module.exports = {
  listenAddr: envv('ADDR', '127.0.0.1'),  // (1)
  listenPort: envv('PORT')                // (2)
};
```

1. `listenAddr` will be `process.env.ADDR` or `127.0.0.1`
2. if `process.env.PORT` is not given, `Error: env var 'PORT' is missing` will be thrown
