import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "steelblue",
          padding: "20px",
          width: "70vw",
          margin: "auto",
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            HOME
          </Link>
        </li>

        <li>
          <Link
            to="/auth/signup"
            style={{ textDecoration: "none", color: "white" }}
          >
            SIGNUP
          </Link>
        </li>
        <li>
          <Link
            to="/auth/signin"
            style={{ textDecoration: "none", color: "white" }}
          >
            SIGNIN
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            DASHBOARD
          </Link>
        </li>
      </ul>
    </div>
  );
}
