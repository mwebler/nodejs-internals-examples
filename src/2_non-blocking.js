const { log } = console;
const fs = require('fs');

log('start synchronous write');
fs.writeFile('./test.txt', 'write this to file', () => log('end asynchronous write'));

// set an immediate timer
setTimeout(() => log('timer ended'), 0);

log('reached end of file');
