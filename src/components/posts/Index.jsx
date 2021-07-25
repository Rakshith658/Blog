import React from "react";
import "./index.css";

import Post from "../post/Index";

const Index = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} key={p._id} />
      ))}
    </div>
  );
};

export default Index;
