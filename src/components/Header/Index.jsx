import React from "react";
import "./index.css";

const Index = () => {
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headertitleSm">React & node</span>
        <span className="headertitlelg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
};

export default Index;
