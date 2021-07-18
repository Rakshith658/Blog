import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Index = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginform">
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter your Email" id="Email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          security={true}
          id="password"
        />
        <buttom className="loginsubmit">Login</buttom>
      </form>
      <Link to="/register">
        <buttom className="registersubmit">Register</buttom>
      </Link>
    </div>
  );
};

export default Index;
