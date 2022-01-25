import React from "react";
import PostContainer from "../containers/PostContainer";

const PostPage = ({ match }: any) => {
  const id = window.location.pathname.split(":")[1];

  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;
