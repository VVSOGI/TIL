// 재귀함수를 이용한 DFS

function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}

// 내 풀이

const permutation = (selectNumber, arr) => {
  const result = [];
  if (selectNumber === 1) {
    return arr.map((item) => [item]);
  }

  arr.forEach((item, index, array) => {
    const rest = [...array.slice(0, index), ...array.slice(index + 1)];
    const permutations = permutation(selectNumber - 1, rest);
    const attached = permutations.map((value) => [item, ...value]);
    result.push(...attached);
  });
  return result;
};

function solution(k, dungeons) {
  let order = dungeons.map((item, index) => index);
  let everyCase = permutation(order.length, order);
  let canAdventure = [];

  while (everyCase.length) {
    let hp = k;
    let queue = everyCase.shift();
    let count = 0;

    for (let i = 0; i < queue.length; i++) {
      if (hp < dungeons[queue[i]][0]) {
        break;
      } else {
        count++;
        hp = hp - dungeons[queue[i]][1];
      }
    }
    canAdventure.push(count);
  }

  return Math.max(...canAdventure);
}
