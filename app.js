const http = require("http");

// const http = require("express"); -> expansiones
// const http = require("./big.json"); -> require de un archivo del sistema.

const server = http.createServer();

server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");

  res.end("Hello World\n");
});

server.listen(8080);

console.log("Server running at http://localhost:8080");
