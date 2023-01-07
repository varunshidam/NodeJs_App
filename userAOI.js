const http = require("http");
const port = 8082;
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("json1.json", "utf-8");
  console.log(data);
  const objdata = JSON.parse(data);

  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Create Server by Varun for Home Page</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Create Server by Varun for Contact Page</h1>");
  } else if (req.url === "/userapi") {
    res.writeHead(200, {'content-type' : 'application/json'});
    res.end(objdata[0].username);
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
