function overlapDelete(arr) {
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// 배열의 중복된 부분을 제거하기 위한 함수

function solution(nums) {
  let newArr = overlapDelete(nums);
  let Length = newArr.length;
  let half = nums.length / 2;

  return Length < half ? Length : half;
}

console.log(solution([3, 3, 3, 2, 2, 4]));
