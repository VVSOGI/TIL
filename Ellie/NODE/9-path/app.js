const path = require("path");

console.log(__dirname);
console.log(__filename);
console.clear();

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parse = path.parse(__filename);
console.log(parse);

const str = path.format(parse);
console.log(str);

// isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize
console.log(path.normalize("./folder////////sub"));

// join
console.log(__dirname + "/" + "image");
console.log(path.join(__dirname, "image"));
