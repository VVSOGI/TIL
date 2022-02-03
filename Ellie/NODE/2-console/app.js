console.log("logging");
console.clear();

// log Level
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");

console.assert(1 === 1, "same");
console.assert(1 === 2, "not same");

const student = { name: "ellie", age: 20, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: true, depth: 2 });

// measuring time
console.time();
for (let i = 0; i < 1; i++) {}
console.timeEnd();

// counting
const a = () => {
  console.count("a function");
};

a();
console.countReset("a function");
a();

const f1 = () => {
  f2();
};

const f2 = () => {
  f3();
};

const f3 = () => {
  console.log("f3");
  console.trace();
};

f1();
