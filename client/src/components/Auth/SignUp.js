import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";

export default function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${process.env.REACT_APP_BE_URL}/signup`, {
        username,
        email,
        password,
      });
      if (res.data) {
        localStorage.setItem("profile", JSON.stringify(res.data));
        setMessage(true);
        window.location.replace("/signin");
      }
    } catch (err) {
      if (err.response.status === 401) {
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
            placeholder="UserName"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
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
