import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  // const history = useHistory();
  const onPress = async (e) => {
    e.preventDefault();
    const body = {
      username,
      email,
      password,
    };
    try {
      seterror(false);
      const res = await axios.post("/auth/register", body);
      res.data && window.location.replace("/login");
    } catch (error) {
      seterror(true);
      console.log(error);
    }
    setusername("");
    setemail("");
    setpassword("");
    // history.push("/login");
  };
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="Registerform" onSubmit={onPress}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          placeholder="Enter your Username"
          id="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
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
        <button type="submit" className="Registersubmit">
          Register
        </button>
        <span>{error && "something went worng"}</span>
      </form>
      <Link to="/login">
        <buttom className="Loginsubmit">Login</buttom>
      </Link>
    </div>
  );
};

export default Index;
