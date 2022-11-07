import Home from "./components/Home/Home.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp.js";
import SignIn from "./components/Auth/SignIn.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import NavBar from "./components/NavBar/NavBar.js";
import { useState } from "react";

function App() {
  const [authorised, setAuthorised] = useState(false);

  //never chage the status value like !authorised directly.
  //use callback function inside setAuthorised assigning oldstate to !oldState
  const authHandler = () => {
    setAuthorised((oldState) => !oldState);
  };

  //const logoutHandler = () => setAuthorised(false);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "lightskyblue",
        width: "75vw",
        height: "75vh",
        margin: "100px auto",
      }}
    >
      <h1>TODO-App</h1>
      <BrowserRouter>
        <div>
          <NavBar authorised={authorised} authHandler={authHandler} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<Dashboard authorised={authorised} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={<SignIn authHandler={authHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
