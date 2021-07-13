import React from "react";
import "./index.css";

const Index = () => {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <div className="sidebarimgp">
          <img
            className="sidebarimg"
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
          />
          <p>
            Hello King Rakshith kumar ,how is the day is going on ,and what
            about codeing and proramming
          </p>
        </div>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATOGARIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistItem">life</li>
          <li className="sidebarlistItem">Music</li>
          <li className="sidebarlistItem">style</li>
          <li className="sidebarlistItem">sport</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW AS</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
