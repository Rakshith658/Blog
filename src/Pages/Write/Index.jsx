import React, { useContext, useState } from "react";
import { Logincontext } from "../../context/context";
import "./index.css";
import axios from "axios";

const Index = () => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [file, setfile] = useState(null);
  const { user } = useContext(Logincontext);

  const handlSubmit = async (e) => {
    e.preventDefault();
    const post = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      post.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("/post", post);
      window.location.replace(`/single/${res.data._id}`);
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setdesc("");
    setfile(null);
  };
  return (
    <div className="write">
      {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeform" onSubmit={handlSubmit}>
        <div className="writeformgroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setfile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeinput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            type="text"
            className="writeinput writeText"
            placeholder="Please tell your Story......"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writesubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Index;
