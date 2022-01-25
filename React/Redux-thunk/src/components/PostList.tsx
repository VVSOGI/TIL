import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts }: { posts: [] }) => {
  return (
    <ul>
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>
          <Link to={`/:${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
