const http = require("http");
const fs = require("fs");
// const http2 = require("http2");
console.clear();
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./html/notFound.html").pipe(res);
  }
});

server.listen(8080);

// res.write(), res.end()
