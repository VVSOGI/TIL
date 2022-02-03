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
