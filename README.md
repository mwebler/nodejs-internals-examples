# Node.js Internals: I/O and the Event Loop


- Quick intro to Blocking vs non-blocking and libuv
- How asynchronous code is executed: the Event Loop
    - What is the Event Loop and why it exists
    - Event Loop phases
    - Node.js timers (nextTick vs SetTimeout vs setInterval)