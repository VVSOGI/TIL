const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream
  .on("finish", () => {
    console.log("finished");
  })
  .on("error", (error) => console.error(error));

writeStream.write("hello ");
writeStream.write("world!");
writeStream.end();

// createWriteStream를 사용하면 존재하지 않는 파일에도 알아서 글을 작성해준다.
// 또한 이벤트를 설정할 수 있어서, finish 되면 원하는 콜백함수를 실행할 수 있다.
