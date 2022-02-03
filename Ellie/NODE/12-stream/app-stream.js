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
