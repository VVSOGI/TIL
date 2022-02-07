const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "Ellie";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JAVASCRIPT" },
  { name: "NODE" },
];
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", { name })
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/notFound.ejs", { name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);

// res.write(), res.end()
