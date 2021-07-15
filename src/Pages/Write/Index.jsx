import React from "react";
import "./index.css";

const Index = () => {
  return (
    <div className="write">
      <img
        className="writeimg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            type="text"
            className="writeinput writeText"
            placeholder="Please tell your Story......"
          ></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
};

export default Index;
