const log = (...args) => console.log(new Date(), ...args);

// Execute callback immediately on next loop
setImmediate(() => log('immediate'));

// Set timeout to execute immediately on next loop
setTimeout(() => log('zero timeout'), 0);

// Create a interval to execute every second
setInterval(() => log('interval'), 1000);

// Set a timeout to be executed in 1 second
setTimeout(() => log('1s timeout'), 1000);

// Create a interval to execute every second, blocking it's end
setInterval(() => {
    log('block interval start');

    // block the end of the interval
    for (let i = 0; i < 5000000000; i++) {
        ;
    }
    log('block interval end');
}, 1000);

// Set callback to be executed on next phase
process.nextTick(() => log('next tick'));
