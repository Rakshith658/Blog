import React from "react";
import "./index.css";

const Index = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="posttitle">Rakshith Kumar s </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        How to create a blog website using React.js. Blog app React project from
        scratch for beginners. Design React blog app using functional React
        components and React Router Dom. How to create a blog website using
        React.js. Blog app React project from scratch for beginners. Design
        React blog app using functional React components and React Router Dom.
        How to create a blog website using React.js. Blog app React project from
        scratch for beginners. Design React blog app using functional React
        components and React Router Dom.
      </p>
    </div>
  );
};

export default Index;
