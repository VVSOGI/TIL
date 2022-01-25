import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { RootState } from "../modules";
import { getPost } from "../modules/posts";

const PostContainer = ({ postId }: { postId: number }) => {
  const { data, loading, error } = useSelector((state: RootState) => {
    return state.posts.post[postId];
  }) || { data: null, loading: false, error: null };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
};

export default PostContainer;
