# 로그인 로그아웃

```js

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            this.setState({
            loggedIn: false,
            loaded: true,
            });
        } else {
            this.setState({
            loggedIn: true,
            loaded: true,
            });
        }
        });
  }

  const onLogout = () => {
    firebase.auth().signOut();
  };

```

계정을 만들면 이메일과 패스워드를 통해 해싱된 Uid가 만들어진다. 이 값은 로그인할 때도 동일하게 적용된다. 만약 내가 로그인 화면에서 아이디와 패스워드를 작성하고 로그인 버튼을 눌렀을 때, 만들어진 Uid가 파이어베이스 Authentication에 있다면 파이어베이스 Authentication의 상태값이 변경이 된다. 이 변화를 감지해서, onAuthStateChanged 메소드를 사용해서, 내 화면의 상태를 변화 관리해주면 된다.

로그아웃은 더 간단하다. auth()의 메소드인 singOut() 함수를 사용하면 Authentication의 상태가 다시 한번 변화하고, 그 값은 다시 한번 onAuthStateChanged에서 감지해서 관리하고 있는 컴포넌트의 상태를 변화 시켜준다.
