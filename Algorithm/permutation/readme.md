# 중복 순열 알고리즘

주어진 입력값에 들어있는 배열을 통해서 n번 선택 가능한 경우의 수를 구해야 한다.

예를 들어, [1, 2, 3]에서 n이 3일 때는

[1, 1, 1], [1, 1, 2], [1, 1, 3], [1, 2, 1] ....
위에 처럼 중복되서 3번 선택하는 데 중복 선택이 가능한 경우의 수를 구해야 한다.

n이 3일 때를 가정해서 풀어보자.

```js
function rps(n) {
  let result = [];
  let arr = [1, 2, 3];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result.push([arr[i], arr[j], arr[k]]);
      }
    }
  }

  return result;
}
// [
//   [ 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 1, 3 ],
//   [ 1, 2, 1 ], [ 1, 2, 2 ], [ 1, 2, 3 ],
//   [ 1, 3, 1 ], [ 1, 3, 2 ], [ 1, 3, 3 ],
//   [ 2, 1, 1 ], [ 2, 1, 2 ], [ 2, 1, 3 ],
//   [ 2, 2, 1 ], [ 2, 2, 2 ], [ 2, 2, 3 ],
//   [ 2, 3, 1 ], [ 2, 3, 2 ], [ 2, 3, 3 ],
//   [ 3, 1, 1 ], [ 3, 1, 2 ], [ 3, 1, 3 ],
//   [ 3, 2, 1 ], [ 3, 2, 2 ], [ 3, 2, 3 ],
//   [ 3, 3, 1 ], [ 3, 3, 2 ], [ 3, 3, 3 ]
// ]
```

반복문을 세 번 중첩시켜서도 중복 순열을 만들 수가 있다. 그렇지만 n이 유동적으로
움직인다고 생각을 해보자. 그 때 마다 반복문을 추가로 작성하는 것은 비 효율적이고 코드 자체도
콜백 지옥에 빠진 것처럼 매우 지저분할 것이다. 보통 이런 경우 재귀적으로 접근하는 게 쉽다.

코드로 한번 직접 보자.

```js
let itemArr = [1, 2, 3];
let result = [];

const recursion = (count = 3, arr = []) => {
  if (count === 0) {
    return result.push(arr);
  }

  for (let i = 0; i < itemArr.length; i++) {
    const pick = itemArr[i];
    recursion(count - 1, arr.concat(pick));
  }
  // 재귀로 자기 자신을 지속적으로 호출하다가 count가 0이 되었을 때,
  // 그 순간은 총 3가지 숫자가 배열 arr안에 들어있는 상황이다. 그 배열을 담아줄
  // 변수 result에 넣어주고 재귀에서 탈출하면 반복문은 자기 할 일을 해야하기 때문에
  // i = 0 에서 i = 1으로 바뀐다. 그러면 pick은 itemArr[1]로 2를 가리키고
  // 다시 한 번 재귀로 들어가는데 중요한 것은 count는 1인 상황이다. 그 말은 arr에
  // 이미 두 가지 숫자가 들어가있는데, [1, 1]이 들어가있는 상황이다.
  // 여기서 pick을 합쳐주면서 들어가면 다시 카운트는 0이 되고, 위의 상황이 반복이 되어서
  // [1,1,3]까지 반복한다. 그렇게 되면 반복문 i = 3이 될 것이고, 반복문은 종료되며
  // [1,1,n]의 재귀는 종료되고 이전 스택에 담긴 재귀로 돌아가서 다시 i가 1인 상황으로
  // 바뀌고 [1,2,n]의 상황이 이어진다. 이 상황이 끝나면 [1,3,n]이 이어지고
  // 후에는 [2,1,n]... [3,3,n]으로 이어진다.
  return result;
};
recursion();
```