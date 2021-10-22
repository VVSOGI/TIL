function barcode(len) {
  // TODO: 여기에 코드를 작성하세요.
  // 주어진 길이 len만큼 1,2,3으로 이루어진 바코드를 만들어야 한다.
  // 인접한 두 부분수열이 같으면 제작이 불가능 하다.
  // 인자 1: len === number 타입의 1 이상 50 이하의 자연수
  // 리턴은 string 타입으로 리턴한다.

  // 001. 1,2,3으로 만든 바코드가 사용 가능한지 판별할 수 있는 isVaild 함수를 만든다.
  // 002. len의 길이까지 바코드를 붙일 수 있는 보조 함수를 만든다.

  function isVaild(str) {
    let reversed = str.split("").reverse().join("");

    let half = Math.floor(reversed.length / 2);
    for (let i = 1; i <= half; i++) {
      if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
        return false;
      }
    }
    return true;
  }

  function aux(str) {
    if (str.length === len) {
      return str;
    }
    const chr = "123";
    for (let i = 0; i < chr.length; i++) {
      let newStr = str + chr[i];
      if (isVaild(newStr)) {
        let result = aux(newStr);
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
  }

  return aux("");
}
