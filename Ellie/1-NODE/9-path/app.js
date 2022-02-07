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

// path에 대한 기본 정보들을 볼 수 있다.
// path.parse를 이용하면 대충 기본 정보들을 다 불러올 수 있다.
// 뭔가 여기서 많은 것들이 파생된 느낌이 든다.
