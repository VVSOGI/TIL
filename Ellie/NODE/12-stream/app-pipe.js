const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");

const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!");
});

const http = require("http");
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);

// pipe는 말 그대로 파이프다. createReadStream, createWriteStream를
// 연결해서 사용할 수도 있다. 해석해보면 file을 읽고 file4에 쓴다고 보면 된다.
// http 서버로 파이프를 연결하면 모든 내용을 다 읽고 서버에 전하는 것이 아닌,
// 읽으면서 데이터를 넘기는 것 같다.
