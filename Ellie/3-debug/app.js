console.clear();
function sayHello() {
  console.log("HEllO!");
}

function calculate(x, y) {
  console.log("calculating..");
  const result = x + y;
  console.log("result: " + result);
  sayHello();
  return result;
}

calculate(2, 5);

const stopNum = 4;
console.log(".... looping");
for (let i = 0; i < 10; i++) {
  console.log("count", i);
  if (i === stopNum) break;
}

// 보통 디버깅을 할 때는 알고리즘을 푸는 경우밖에는 안 썼는데 과연 실무에서도 사용할 수 있을까?
