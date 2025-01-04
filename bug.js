const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running at http://localhost:8080');

//The above code is designed to create a simple HTTP server that listens on port 8080 and responds to all requests with 'Hello, World!'. However, there is a subtle bug related to error handling.

//Bug: The code lacks proper error handling. If there is an issue while starting the server (e.g., port already in use), the server will crash without providing any informative error message.

//The improved version adds error handling to gracefully manage such situations and provide informative error messages.  See the bugSolution.js file.