import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Index = ({ click, user }) => {
  return (
    <div className="top">
      <div className="topLeft">
        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="topListItem">HOME</li>
          </Link>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <Link to="/write" style={{ textDecoration: "none" }}>
            <li className="topListItem">WRITE</li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img
              className="topimg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <li className="topListItem">Login</li>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <li className="topListItem">Register</li>
            </Link>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Index;
