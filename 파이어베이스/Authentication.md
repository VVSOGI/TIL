# Authentication

## 회원가입 부

```js
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((result) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser?.uid)
      .set({ name, email });
  })
  .catch((error) => {
    console.log(error);
  });
```

일단 기본적으로 파이어베이스에 계정을 만든 후에 기초적인 단계를 다 진행하고 코드를 작성하는 부분으로 바로 넘어가보려 한다. 8.23v 에서는 위의 단계처럼 auth()의 메소드를 이용해서 회원가입에 필요한 내용을 데이터베이스에 저장할 수 있다. 위의 코드를 바로 해석하자면 파이어베이스 Authentication에 이메일과 패스워드를 사용해서 UID를 생성한 다음 파이어스토어에 유저 컬렉션에서 유저의 Uid라는 문서에 이름과 이메일을 저장한다는 의미이다. 만약 실패한다면 로그에 에러가 나온다. 이게 전부다.

거의 모든 원리가 이런식이다. 의외로 파이어베이스는 어렵지 않다. 다음 파트엔 로그인과 로그아웃을 한번 다뤄보겠다.
