console.clear();

function hello() {
  //   console.log(this);
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }

  memberFunction() {
    console.log("----- class -----");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(10);
a.memberFunction();

console.log("---- global scope ----");
console.log(this);
console.log(this === module.exports);

console.log(global, "123");

// this가 어디에 박혀있느냐에 따라 다르게 표현된다.
