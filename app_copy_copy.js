const http = require("http");
const fs = require("fs");
const port = 3003;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text" });
  fs.readFile("text.txt", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("error, file not found");
    } else {
      res.write(data);
    }
    res.end();
  });

  res.write("Hello world two");
});

server.listen(port, function (error) {
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log("server is listening on port " + port);
  }
});
