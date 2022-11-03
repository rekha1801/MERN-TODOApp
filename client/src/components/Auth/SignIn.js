import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${process.env.REACT_APP_BE_URL}/signin`, {
        email,
        password,
      });

      if (res.data) {
        setMessage(true);
        window.location.replace("/dashboard");
      }
    } catch (err) {
      if (err.response.status === 400) {
        setError(true);
      }
    }
  };
  return (
    <div>
      <h3>LogIn</h3>
      <form action="post" onSubmit={handleSubmit}>
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
          <button type="submit">SignIn</button>
        </div>
      </form>
      {message && "Login Successfull!!!"}
      {error && "Invalid Credentials"}
    </div>
  );
}
