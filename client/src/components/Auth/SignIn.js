import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/signin`, userData)
      .then((res) => console.log("Response from backend" + res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>LogIn</h3>
      <form action="post" onSubmit={handleSubmit}>
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
          <button type="submit">SignIn</button>
        </div>
      </form>
    </div>
  );
}
