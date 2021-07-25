import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

import Header from "../../components/Header/Index";
import Sidebar from "../../components/Sidebar/Index";
import Post from "../../components/posts/Index";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [posts, setposts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchposts = async () => {
      const posts = await axios.get("/post" + search);
      setposts(posts.data);
    };
    fetchposts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Index;
