// import http from "http"
const http = require("http");

// Create a server
const server = http.createServer((request, response) => {
  response.write("<h1>Hello Node!!!!</h1>\n");
  response.end();
});

// Listen on port 3000
server.listen(3000);
