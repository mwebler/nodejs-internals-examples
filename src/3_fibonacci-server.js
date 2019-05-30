const { log } = console;
const http = require('http');

const sleepImmediate = () => new Promise((resolve) => setImmediate(resolve));

const non_blocking_fibonacci = async (num) => {
  var a = BigInt(1), b = BigInt(0), temp = BigInt(0);
  while (num >= 0){
    // sleep after 100 iterations
    if(num % 100 === 0) {
      await sleepImmediate();
    }
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

const fibonacci = (num) => {
  var a = BigInt(1), b = BigInt(0), temp = BigInt(0);
  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

// start a simple web server on port 3000
log('start server');
const server = http.createServer((req, res) => {
  let data = '';

  req.on('data', (chunk) => data += chunk);

  req.on('end', async () => {
      let start = Date.now();
      // read number from request body
      const body = JSON.parse(data);
      const number = parseInt(body.n, 10);
      if(body.async) {
        await non_blocking_fibonacci(number);
      } else {
        await fibonacci(number);
      }

      res.end(`Request took ${(Date.now() - start) / 1000}`);
  });
}).listen(3000, () => { log('server started')});

log('start 1s interval');
let start = Date.now();

setInterval(() => {
    log(`interval took ${(Date.now() - start) / 1000} seconds`);
    start = Date.now();
}, 1000);