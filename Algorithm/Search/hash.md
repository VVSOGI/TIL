배열안에 공간 7개로 데이터를 저장 관리한다.
22 % 7 = 1
48 % 7 = 6
33 % 7 = 5

let arr = [];
arr[1] = 22, arr[6] = 48, arr[5] = 33,

O(1), O(N);

만약 데이터가 위치에 중복될 경우?
배열이 아니라 오브젝트로 넣어준다면

29 % 7 = 1

object[1] = [22, 29];
...

O(N);

원하는 모든 데이터를 정리해서 넣어둘 수 있지만 데이터 공간의 낭비가 있을 수 있다.
정렬되지 않은 데이터를 해시 탐색으로 크기순 정렬한 다음, 이진 탐색?
그럴바에 그냥 선형 탐색으로 데이터를 찾는 것이 더 빠를 것. 애매하다.
