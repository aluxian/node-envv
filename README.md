# envv

Simple util for config files that checks and returns an env var.

[![NPM](https://nodei.co/npm/envv.png)](https://nodei.co/npm/envv/)

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
