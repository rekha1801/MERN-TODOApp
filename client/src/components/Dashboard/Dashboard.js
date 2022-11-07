import axios from "axios";

import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";

export default function Dashboard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  const { authorised } = props;

  //component will mount
  useEffect(() => {
    console.log("user logged in !!", +authorised);
    if (!authorised) {
      navigate("/signin");
    }
  }, []);

  //It is a way to do something when we are demounting this component
  //componentWillUnmount
  // useEffect(() => {
  //   return () => {}; //we clear those effects or memories that are no more required in our APP.
  // });
  const postRequestHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { title, description, image };
      const res = await axios.post(
        `${process.env.REACT_APP_BE_URL}/dashboard/create-todo`,
        //`http://localhost:5000/dashboard/create-todo`,
        data,
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("toDoToken")
            )}`,
          },
        }
      );
      console.log(res);
      if (res.data) {
        setMessage(true);
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {authorised ? (
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
          <hr />
          {message ? "Data inserted successfully" : ""}
        </form>
      ) : (
        "Log in first!"
      )}
    </div>
  );
}
