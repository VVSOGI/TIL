const os = require("os");

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());

// 내장 os 정보
// os 타입에 따라 다르게 정보를 제공하는 형식이 이루어질 수도?
