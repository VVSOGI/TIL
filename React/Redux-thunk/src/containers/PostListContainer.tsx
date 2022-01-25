import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList";
import { RootState } from "../modules";
import { getPosts } from "../modules/posts";

const PostListContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.posts.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPosts(null));
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostListContainer;
