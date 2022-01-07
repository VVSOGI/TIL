# 데이터 가져오기.

```js
firebase
  .firestore()
  .collection("users")
  .doc(firebase.auth().currentUser?.uid)
  .get()
  .then((snapshot) => {
    if (snapshot.exists) {
      dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
    } else {
      console.log("does not exist");
    }
  });
```

파이어 베이스에서 간단하게 데이터를 불러오는 법을 보겠다. 8.23v 에서는 기본적으로 쓰임이 거의 비슷하다. 파이어스토어의 유저라는 컬렉션에서 현재 유저의 Uid라는 문서에서 get()을 사용해 데이터를 가져온다.

밑의 부분은 개인 프로젝트의 리덕스를 사용하는 부분이라서 디스패치나 이런 부분들은 무시하고 보겠다.

어쨋든 가져온 데이터가 존재한다면 데이터.data()를 통해서 현재 유저의 정보에 접근을 할 수 있다.

```js
firebase
  .firestore()
  .collection("posts")
  .doc(firebase.auth().currentUser?.uid)
  .collection("userPosts")
  .orderBy("creation", "asc")
  .get()
  .then((snapshot) => {
    let posts = snapshot.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return { id, ...data };
    });
    dispatch({ type: USER_POSTS_STATE_CHANGE, posts });
  });
```

이 글을 읽기전에 세이브데이터라는 정리된 파일을 읽어보면 도움이 된다! 우린 먼저 게시물이라는 데이터를 저장하기 위해서 Posts라는 저장소를 따로 만들어서 유저의 게시물 데이터를 관리했다. 이번엔 그 데이터들을 불러오는 방법에 대해서 정리를 해보겠다. 늘 그렇듯이 파이어스토어에 접근해서 이번엔 posts라는 컬렉션에 접근한다. 그리고 자신의 uid라는 문서에 접근한 후 userposts에 한번 더 접근한다.

만약에 나라는 유저가 많은 게시물을 가지고 있다고 생각해보자. 나는 게시물 1,000개를 가지고 있다. 그렇다면 userposts라는 컬렉션 안에는 1,000개의 데이터가 있을 것이다. 그것들을 나는 생성일자를 기준으로 오름차순 (asc === ascending)으로 불러올 것이다. orderBy는 그런 의미로 사용된다.

그리고 get을 이용해서 데이터를 불러온 다음 데이터가 저장되어있는 docs라는 객체에 접근한다. [[데이터.docs]] 데이터.docs는 배열이기 때문에 map이라는 함수를 이용해서 배열의 요소 하나하나에 접근할 수 있다. 이제 배열의 요소 하나하나에 들어가 있는 내 게시물의 데이터를 const data = doc.data()로 data라는 변수에 저장하고, const id = doc.id를 통해 id값도 불러올 것이다. 그리고 객체에 아이디와 데이터를 담아서 리턴을 해주면 최종적으로 posts라는 배열안에 id값과 데이터값이 저장된다.

좀 복잡해보이는데, 중요한 것은 get을 통해 불러온 데이터 === snapshot 에 docs에 접근하면 원하는 데이터를 찾을 수 있다는 것만 알아가면 된다.
