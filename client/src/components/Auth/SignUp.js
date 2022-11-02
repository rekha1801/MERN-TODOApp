import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({
      username: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });

    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/signup`, userData)
      .then((res) => console.log("Response from backend" + res))
      .catch((err) => console.log(err));
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
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="email" id="email" placeholder="Email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <div>
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  );
}
