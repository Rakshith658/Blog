import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Index = ({ show, click, user }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")} onClick={click}>
      <ul className="ul">
        <li className="topListItem">
          <i class=" fab fa-facebook-square"></i>
        </li>
        <li className="topListItem">
          <i class=" fab fa-instagram-square"></i>
        </li>
        <li className="topListItem">
          <i class=" fab fa-pinterest-square"></i>
        </li>
        <li className="topListItem">
          <i class=" fab fa-twitter-square"></i>
        </li>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="topListItem">HOME</li>
        </Link>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <Link to="/write" style={{ textDecoration: "none" }}>
          <li className="topListItem">WRITE</li>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <li className="topListItem">{user ? "LOGOUT" : "LOGIN"}</li>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <li className="topListItem">{!user && "Register"}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Index;
