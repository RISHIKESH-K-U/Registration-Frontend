import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [usernameReg, setusernamereg] = useState("");
  const [passewordReg, setpasswordreg] = useState("");

  const [username, setusernamelog] = useState("");
  const [password, setpasswordlog] = useState("");

  const [loginstatus, setloginstatus] = useState("");
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passewordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const signin = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setloginstatus(response.data.message);
      } else {
        setloginstatus(response.config.data);
      }
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>SIGN UP</h1>
        <label>USERNAME</label>
        <input
          type="text"
          onChange={(e) => {
            setusernamereg(e.target.value);
          }}
        />
        <label>PASSWORD</label>
        <input
          type="text"
          onChange={(e) => {
            setpasswordreg(e.target.value);
          }}
        />
        <button onClick={register}>SIGN UP</button>
      </div>
      <div className="login">
        <h1>SIGN IN</h1>
        <input
          type="text"
          placeholder="USERNAME"
          onChange={(e) => {
            setusernamelog(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          onChange={(e) => {
            setpasswordlog(e.target.value);
          }}
        />
        <button onClick={signin}>SIGN IN</button>
      </div>
      <h1>{loginstatus}</h1>
    </div>
  );
}

export default App;
