import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${process.env.REACT_APP_BE_URL}/signin`, {
        email,
        password,
      });

      if (res.data) {
        setMessage(true);
        localStorage.setItem("toDoToken", JSON.stringify(res.data.token));
        props.authHandler();
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h3>Log In</h3>
      <form action="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            autoComplete="none"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">SignIn</button>
          <hr />
          {error ? { error } : null}
        </div>
      </form>
      {message && "Login Successfull!!!"}
    </div>
  );
}
