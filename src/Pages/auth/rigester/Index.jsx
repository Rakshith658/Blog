import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="Registerform">
        <label htmlFor="Username">Username</label>
        <input type="text" placeholder="Enter your Username" id="Username" />
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter your Email" id="Email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          security={true}
          id="password"
        />
        <buttom className="Registersubmit">Register</buttom>
      </form>
      <Link to="/login">
        <buttom className="Loginsubmit">Login</buttom>
      </Link>
    </div>
  );
};

export default Index;
