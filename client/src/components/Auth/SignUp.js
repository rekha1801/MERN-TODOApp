import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${process.env.REACT_APP_BE_URL}/signup`, {
        username,
        email,
        password,
      });
      if (res.data) {
        console.log(res.data);
        localStorage.setItem("toDoToken", JSON.stringify(res.data.token));
        setMessage(true);
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
      if (err.response.data.status === "failed") {
        setError(true);
      }
    }
  };

  return (
    <div>
      <h3> REGISTER</h3>
      <form action="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your UserName"
            name="username"
            onBlur={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            name="email"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            name="password"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>

      {message && "User registered Successfully !!!"}
      {error && "Email already registered!!!"}
      <hr></hr>
      <div>
        <p>
          Already have a user?{"   "}
          <button className="signin">
            <Link className="signin-link" to="/signin">
              SignIn
            </Link>
          </button>
        </p>
      </div>
    </div>
  );
}
