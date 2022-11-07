import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ authorised, authHandler }) {
  const navigate = useNavigate();

  const manageAuthorisation = () => {
    if (authorised) {
      navigate("/");
      authHandler();
    } else navigate("/signin");
  };

  return (
    <div>
      <ul className="list">
        <li>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        {authorised ? (
          <li>
            <Link to="/dashboard" className="link">
              DASHBOARD
            </Link>
          </li>
        ) : null}
        {!authorised ? (
          <>
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
          </>
        ) : (
          <button onClick={manageAuthorisation}>LOGOUT</button>
        )}
      </ul>
    </div>
  );
}
