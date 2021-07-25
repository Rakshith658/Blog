import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Index = ({ post }) => {
  const PF = "http://localhost:5050/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo || post.photo} alt="" />
      )}

      <div className="postinfo">
        <div className="postcats">
          {post.category.map((c) => (
            <span className="postcat" key={post._id}>
              {c}
            </span>
          ))}
        </div>
        <Link
          to={`/single/${post._id}`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <span className="posttitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Index;
