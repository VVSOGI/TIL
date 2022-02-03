const fs = require("fs");

// 3
// rename(..., callback(error, data))
// try {renameSync(....)} catch {}
// promises.rename().then().catch()

try {
  fs.renameSync("./file.txt", "./file-new.txt");
} catch (error) {
  console.error(error);
}

fs.rename("./file.txt", "./file-new.txt", (error) => {
  console.log(error);
});

fs.promises
  .rename("./file-new.txt", "./file.txt")
  .then(() => console.log("done"))
  .catch((e) => console.log(e));
