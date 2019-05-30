const { log } = console;
const http = require('http');
const fs = require('fs');

// set an immediate timer
setTimeout(() => log('timer ended'), 0);

log('start synchronous write');
fs.writeFileSync('./test.txt', 'write this to file');
log('end synchronous write');

log('reached end of file');
