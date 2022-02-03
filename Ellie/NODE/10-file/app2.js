const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((e) => console.error(e));

fs.writeFile("./file.txt", "Hello, dream coders! :)") //
  .catch(console.error);

fs.appendFile("./file.txt", " Yo, dream coders! :)") //
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt") //
      .catch(console.error);
  })
  .catch(console.error);

fs.mkdir("sub-folder") //
  .catch(console.error);

fs.readdir("./") //
  .then((data) => console.log(data))
  .catch(console.error);
