function solution(cacheSize, cities) {
  // 캐시 크기에 맞게 배열을 뺀다. Name = A
  // 최초 시작할 때에는 count에 캐시 크기의 길이 곱하기 5를 더해준다.
  // 캐시 크기에 맞게 queue 배열도 뺀다. Name = B
  // queue 배열의 아이템들이 A에 들어있는지 확인하고 있으면 count +1; 없으면 count +5;
  // B는 A의 위치로 가고, 새로운 B를 생성한다.
  if (cacheSize === 0) return cities.length * 5;

  cities = cities.map((item) => item.toUpperCase()).reverse();

  let count = 0;
  let cache = [];

  while (cities.length) {
    let queue = cities.pop();

    if (cache.length === cacheSize) {
      if (cache.indexOf(queue) === -1) {
        cache.shift();
        cache.push(queue);
        count += 5;
      } else {
        cache.splice(cache.indexOf(queue), 1);
        cache.push(queue);
        count += 1;
      }
    } else {
      if (cache.indexOf(queue) === -1) {
        cache.push(queue);
        count += 5;
      } else {
        cache.splice(cache.indexOf(queue), 1);
        cache = [...cache, queue];
        count += 1;
      }
    }
  }
  return count;
}

console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
