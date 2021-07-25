import React, { useEffect, useState } from "react";
import "./index.css";
import Singlepost from "../../components/singlepost/Index";
import Sidebar from "../../components/Sidebar/Index";
import axios from "axios";

const Index = ({ match, history }) => {
  const [post, setpost] = useState({});
  useEffect(() => {
    const fetchpost = async () => {
      const Post = axios.get(`/post/${match.params.postId}`);
      setpost((await Post).data);
    };
    fetchpost();
  }, [match.params.postId]);
  return (
    <div className="single">
      <Singlepost post={post} key={post._id} />
      <Sidebar />
    </div>
  );
};

export default Index;
