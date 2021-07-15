import React from "react";
import "./index.css";
import Sidebar from "../../components/Sidebar/Index";

const Index = () => {
  return (
    <div className="setting">
      <div className="settingwrapper">
        <div className="settingTitile">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingform">
          <label>Profile Pricture</label>
          <div className="settingPP">
            <img
              className="settingimg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileinput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Rakshith Kumar" id="username" />
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder="rakshithkumars7777@gmail.com"
            id="Email"
          />
          <label htmlFor="password">password</label>
          <input type="password" security={true} id="password" />
          <button className="settingUpdate">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Index;
