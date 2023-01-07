const http = require("http");
const port = 8800;
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>HOME</h1>");
  } else if (req.url === "/file") {
    fs.readFile("json1.json","utf-8",(err,data) => {
      console.log(data);
      res.writeHead(200, {'content-type' : 'application/json'});
      res.end(data.toUpperCase());
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 SERVER NOT FOUND</h1>");
  }
});

server.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", err);
  } else {
    console.log("server is listening on port " + port);
  }
});
