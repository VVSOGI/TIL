let count = 0;

function increase() {
  count++;
}

function getCount() {
  console.log(count);
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;

// common js 방식의 import export
// babel을 사용할 수 없는 환경이라면 common js를 사용해야한다.
