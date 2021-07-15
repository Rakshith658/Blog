import React from "react";
import "./index.css";
import Singlepost from "../../components/singlepost/Index";
import Sidebar from "../../components/Sidebar/Index";

const Index = () => {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
};

export default Index;
