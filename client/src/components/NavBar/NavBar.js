import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <ul className="list">
        <li>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>

        <li>
          <Link to="/signup" className="link">
            SIGNUP
          </Link>
        </li>
        <li>
          <Link to="/signin" className="link">
            SIGNIN
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="link">
            DASHBOARD
          </Link>
        </li>
      </ul>
    </div>
  );
}
