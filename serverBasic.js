const http = require("http");
const port = 8080;
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Create Server by Varun for Home Page</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Create Server by Varun for Contact Page</h1>");
  } else if (req.url === "/file") {
    fs.readFile("json1.json", "utf-8", (err, data) => {
      console.log(data);
      res.writeHead(200,{'content-type' : 'application/json'});
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Server Not Found</h1>");
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log("server is listening on port " + port);
  }
});
