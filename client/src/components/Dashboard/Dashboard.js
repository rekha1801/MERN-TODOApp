import axios from "axios";

import React, { useState, useNavigate } from "react";
import FileBase64 from "react-file-base64";

export default function Dashboard() {
  const user = localStorage.getItem("profile");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const postRequestHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { title, description, image };
      const res = await axios.post(
        //`${process.env.REACT_APP_BE_URL}/dashboard/create-todo`,
        `http://localhost:5000/create-todo`,
        data
      );

      if (res.data) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user ? (
        <form action="post" onSubmit={postRequestHandler}>
          <h2>Welcome to the TODO List</h2>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title of the task"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => {
                setImage(base64);
              }}
            />
          </div>

          <button type="submit">Insert</button>
          <hr></hr>
        </form>
      ) : (
        "Log in first"
      )}
    </div>
  );
}
