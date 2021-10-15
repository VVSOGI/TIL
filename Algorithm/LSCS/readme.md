# LSCS

문제
정수를 요소로 갖는 배열을 입력받아 다음의 조건을 만족하는 LSCS\*를 리턴해야 합니다.

LSCS: 주어진 배열의 연속된 부분 배열\*의 합을 구한다고 할 때, 이 중 가장 큰 값(Largest Sum of Contiguous Subarray)
연속된 부분 배열들: 배열 [1,2,3]의 연속 부분 배열은 [1], [1, 2], [1, 2, 3], [2], [2, 3], [3] 입니다.

# 입출력 예시

```js
let output = LSCS([1, 2, 3]);
console.log(output); // --> 6

output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6 ([1, 2, 3])

LSCS([1, 2, 3, -4, 5]);
console.log(output); // --> 7 ([1, 2, 3, -4, 5])

LSCS([10, -11, 11]);
console.log(output); // --> 11 ([11])
```
