import React from "react";

const Post = ({ post }: any) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
