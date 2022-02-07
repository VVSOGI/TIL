let count = 0;

export function increase() {
  count++;
}

export function getCount() {
  console.log(count);
  return count;
}

// es6+ 방법의 모듈 시스템 최근에 가장 많이 쓰이는 형태
// package.json에서 type을 module로 설정하면 가능.
