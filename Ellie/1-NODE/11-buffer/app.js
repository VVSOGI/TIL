// Fixed-size chunk of memory
// array of integers, byte of data
const buf = Buffer.from("Hi"); // uni code
console.log(buf);
console.log(buf[0], buf[1]); // ascii code
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2, buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());

// buffer에 대한 기본적인 내용.
// Buffer.from에 원하는 내용을 집어넣어서 콘솔로 찍어보면
// unicode의 형태로 변환된다. 또한 배열로 리턴이 되는데,
// 구조분해할당 하듯이 확인하면 ascii code로 리턴된다.
// toString()을 사용하면 다시 원래 문자로 변환.
