const fs = require("fs");

const data = [];
const readStream = fs
  .createReadStream("./file.txt", {
    highWaterMark: 8, // 64kbytes
    encoding: "utf-8",
  })
  .once("data", (chunk) => {
    data.push(chunk);
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => console.error(error));

// createReadStream을 사용하면 순차적으로 highWaterMark의 크기만큼
// 반환한다. 또한 원하는 데이터 배열에 넣어줄 수도 있다.
