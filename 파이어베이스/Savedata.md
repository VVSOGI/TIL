# 원하는 데이터를 데이터 베이스에 저장하는 법.

```js
firebase
  .firestore()
  .collection("posts")
  .doc(firebase.auth().currentUser.uid)
  .collection("userPosts")
  .add({
    downloadURL,
    caption,
    creation: firebase.firestore.FieldValue.serverTimestamp(),
  });
```

이제 원하는 데이터를 저장하는 법을 알아보겠다. 어렵지 않다. 우선 데이터베이스에 접근하는 방법은 앞서 다뤘던 방법들과 다르지 않다. 파이어베이스의 파이어스토어에 접근한다. 앞에서 우리는 이미 users라는 하나의 컬렉션을 가지고 있다. 나는 이번에 게시물이라는 데이터를 저장해야 하는데, 유저라는 컬렉션과 구분지어서 데이터를 저장하고 싶다. 그러면 간단하게 새로운 컬렉션인 posts라는 컬렉션을 만들면 된다.

"posts라는 컬렉션을 따로 만들지 않았는데 어떻게 접근을 할 수가 있지?" 라는 의문이 들 수도 있다. 최신 버전에서는 어떻게 되고있는지 모르겠지만, 이전 버전에서는 존재하는 컬렉션에 접근하는 방법과 생성하는 방법이 동일하다고 보면 편할 것 같다. 그냥 그렇게 알고 넘어가자. 없으면 곧바로 만들어버리는 훌륭한 친구다!

어쨋든 posts라는 컬렉션을 생성하고 다른 유저들의 게시물과 섞이지 않기 위해서 내 고유 Uid를 이용해서 문서를 만들 것이다. 이후 굳이 userPosts라는 컬렉션을 하나 더 만들어서 원하는 데이터들을 담아보겠다.

여기서 원하는 데이터는 에드 함수 안에 있는
{
downloadURL,
caption,
creation: firebase.firestore.FieldValue.serverTimestamp(),
}
가 되겠다.

이제 저렇게 만들어진 함수를 통해서 버튼을 클릭한다면 내 데이터베이스에 이쁘게 잘 담겨있는 모습을 확인할 수 있다. 만약에 이 글을 시도하는 사람이 있다면 파이어베이스 홈페이지에 들어가서 실제로 어떻게 담기는지 확인해보면 좋을 것이다.
