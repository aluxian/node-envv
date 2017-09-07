'use strict';

const envv = require('..');

module.exports = {
  listenAddr: envv('ADDR', '127.0.0.1'),
  listenPort: envv('PORT')
};
