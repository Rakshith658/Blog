import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { apiCalls } from "../../../apicalls";
import { Logincontext } from "../../../context/context";
import "./index.css";

const Index = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { isFetching, dispatch } = useContext(Logincontext);
  const login = (e) => {
    e.preventDefault();
    apiCalls({ email, password }, dispatch);
    setemail("");
    setpassword("");
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginform" onSubmit={login}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          id="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          security={true}
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <buttom className="loginsubmit" type="submit" onClick={login}>
          {isFetching ? "loading...." : "Login"}
        </buttom>
      </form>
      <Link to="/register">
        <buttom className="registersubmit">
          {isFetching ? "loading...." : "Register"}
        </buttom>
      </Link>
    </div>
  );
};

export default Index;
