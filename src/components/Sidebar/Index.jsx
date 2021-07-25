import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Index = () => {
  const [cat, setcat] = useState([]);
  useEffect(() => {
    const fetchcat = async () => {
      const Cat = await axios.get("/category");
      setcat(Cat.data);
    };
    fetchcat();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <div className="sidebarimgp">
          <img
            className="sidebarimg"
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
          />
          <p>
            Hello King Rakshith kumar ,how is the day is going on ,and what
            about codeing and proramming
          </p>
        </div>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATOGARIES</span>
        <ul className="sidebarlist">
          {cat.map((c) => (
            <Link to={`/?catName=${c.name}`} key={c._id}>
              <li className="sidebarlistItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW AS</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
