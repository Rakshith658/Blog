import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Logincontext } from "../../context/context";
import "./index.css";
import axios from "axios";

const Index = ({ post }) => {
  const { user } = useContext(Logincontext);

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [updatemood, setupdatemood] = useState(false);

  const PF = "http://localhost:5050/images/";
  const deletepost = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  const uppost = () => {
    setupdatemood(true);
    setdesc(post.desc);
    settitle(post.title);
  };
  const UpDate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/post/${post._id}`, { ...post, desc, title });
      window.location.reload();
      setupdatemood(false);
      setdesc("");
      settitle("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        {post.photo && (
          <img
            className="singlepostimg"
            src={PF + post.photo || post.photo}
            alt=""
          />
        )}

        <span className="singlepostTitle">
          {(updatemood && (
            <input
              type="text"
              placeholder="Title"
              className="singleinput"
              autoFocus={true}
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          )) ||
            post.title}
          <div className="singlepostEdit">
            {user?.username === post.username && (
              <div>
                {updatemood && (
                  <button
                    className="singlesubmit"
                    type="button"
                    onClick={UpDate}
                  >
                    UpDate
                  </button>
                )}
                <i className="singlePostIcon far fa-edit" onClick={uppost}></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={deletepost}
                ></i>
              </div>
            )}
          </div>
        </span>
        <div className="singlepostinfo">
          <span className="singlepostAuthor">
            Author :
            <Link
              to={`/?username=${post.username}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlepostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlepostDesc">
          {(updatemood && (
            <textarea
              type="text"
              className="singleinput singleText"
              placeholder="Please tell your Story......"
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
            ></textarea>
          )) ||
            post.desc}
        </p>
      </div>
    </div>
  );
};

export default Index;
