# Node.js Internals: I/O and the Event Loop

[Link to presentation](https://mwebler.github.io/nodejs-internals-examples/)

Examples can be found on the `src/` folder.

What the presentation covers:
- Quick intro to Blocking vs non-blocking and libuv
- How asynchronous code is executed: the Event Loop
    - What is the Event Loop and why it exists
    - Event Loop phases
    - Node.js timers (nextTick vs SetTimeout vs setInterval)