import Home from "./components/Home/Home.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp.js";
import SignIn from "./components/Auth/SignIn.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import NavBar from "./components/NavBar/NavBar.js";

function App() {
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
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
