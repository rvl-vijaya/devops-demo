const http = require("http");

const server = http.createServer((req, res) => {
  res.write("DevOps Demo App Running!");
  res.end();
});

server.listen(3000);