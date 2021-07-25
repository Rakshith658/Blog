import React, { useContext, useState } from "react";
import "./index.css";
import Sidebar from "../../components/Sidebar/Index";
import { Logincontext } from "../../context/context";
import axios from "axios";

const Index = () => {
  const { user, dispatch } = useContext(Logincontext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [File, setFile] = useState(null);
  const PF = "http://localhost:5050/images/";
  const upDateUser = async (e) => {
    e.preventDefault();
    console.log("work");
    const newUser = {
      userId: user._id,
      username: user.username,
      email,
      password,
    };
    if (File) {
      const data = new FormData();
      const filename = user.username + File.name;
      data.append("name", filename);
      data.append("file", File);
      newUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(`/user/${user._id}`, newUser);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccount = async (e) => {
    e.preventDefault();
    console.log("delete");
    try {
      await axios.delete(`/user/${user._id}`, { data: { userId: user._id } });
      dispatch({ type: "LOG_OUT" });
      window.location.reload();
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="setting">
      <div className="settingwrapper">
        <div className="settingTitile">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle" onClick={deleteAccount}>
            Delete Account
          </span>
        </div>
        <form className="settingform" onSubmit={upDateUser}>
          <label>Profile Pricture</label>
          <div>
            {((user.profilePic || File) && (
              <div className="settingPP">
                <img
                  className="settingimg"
                  src={File ? URL.createObjectURL(File) : PF + user.profilePic}
                  alt=""
                />
                <label htmlFor="fileinput">
                  <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input
                  type="file"
                  id="fileinput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            )) || (
              <div className="settingPP">
                <label htmlFor="fileinput">
                  <i className="settingsPPIconimg far fa-user-circle"></i>
                </label>
                <input
                  type="file"
                  id="fileinput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            )}
          </div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            placeholder={user.email}
            id="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            security={true}
            id="password"
            placeholder="Create your new password with minmam 6 charector"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="settingUpdate" type="submit" onSubmit={upDateUser}>
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Index;
