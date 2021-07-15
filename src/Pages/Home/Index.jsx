import React from "react";
import "./index.css";

import Header from "../../components/Header/Index";
import Sidebar from "../../components/Sidebar/Index";
import Post from "../../components/posts/Index";

const Index = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
};

export default Index;
