import React, { useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Logincontext } from "../../context/context";

const Index = ({ click, user }) => {
  const { dispatch } = useContext(Logincontext);
  const PF = "http://localhost:5050/images/";
  const logout = () => {
    dispatch({ type: "LOG_OUT" });
  };
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
            <li className="topListItem" onClick={logout}>
              {user && "LOGOUT"}
            </li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            {(user.profilePic && (
              <img className="topimg" src={PF + user.profilePic} alt="" />
            )) || <i className="topPPIcon far fa-user-circle"></i>}
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
