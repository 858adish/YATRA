'use strict';

// Cloud hosting needs a server bound to all network interfaces. The original
// server.js binds to 127.0.0.1, so this preload changes only that bind address
// at runtime and leaves the supplied application files untouched.
const net = require('node:net');
const originalListen = net.Server.prototype.listen;
net.Server.prototype.listen = function (...args) {
  const hostIndex = args.findIndex((arg, index) =>
    typeof arg === 'string' && (index === 1 || (index === 0 && typeof args[0] === 'number'))
  );
  if (hostIndex !== -1 && (args[hostIndex] === '127.0.0.1' || args[hostIndex] === 'localhost')) {
    args[hostIndex] = '0.0.0.0';
  }
  return originalListen.apply(this, args);
};
