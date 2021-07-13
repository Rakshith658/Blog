import React from "react";
import "./styles.css";

const Index = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")} onClick={click}>
      <ul className="ul">
        <li className="topListItem">
          <i class=" fab fa-facebook-square"></i>
        </li>
        <li className="topListItem">
          <i class=" fab fa-instagram-square"></i>
        </li>
        <li className="topListItem">
          <i class=" fab fa-pinterest-square"></i>
        </li>
        <li className="topListItem">
          <i class=" fab fa-twitter-square"></i>
        </li>
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
    </div>
  );
};

export default Index;
