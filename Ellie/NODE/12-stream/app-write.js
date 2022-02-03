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
