# Node.js HTTP Server Error Handling Bug

This repository demonstrates a common, yet easily overlooked, bug in Node.js HTTP server implementations: the lack of proper error handling during server startup.

## The Bug

The `bug.js` file contains a simple HTTP server.  It correctly creates and starts the server, responding with "Hello, World!" to all requests. However, it fails to handle potential errors during server initialization, such as when the specified port is already in use.

This can lead to unexpected crashes and unhelpful error messages.  This situation is problematic because it doesn't give any insights about why the server couldn't start.  Running multiple instances of the server will show the problem clearly.

## The Solution

The `bugSolution.js` file provides an improved version with robust error handling using the `'error'` event listener.  This will catch the port-in-use scenario, providing a user-friendly error message.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Try running another instance of `node bug.js` immediately after the first one.  The second one will likely crash without a helpful error message.
4. Now run `node bugSolution.js`. Attempt the second instance again, you'll see a helpful error message.

## Lessons Learned

Always handle potential errors when working with Node.js servers.  Ignoring errors can lead to unexpected application behavior and difficulty in debugging.

Use the appropriate event listeners (`'error'`, `'listening'`, etc.) to ensure graceful handling of various server lifecycle events.