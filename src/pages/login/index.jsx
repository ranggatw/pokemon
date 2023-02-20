import React, { useState } from "react";
import "./index.css";
import { userDatabase } from "../../utils/constant/userDummy/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const errorMsg = {
    invalid: "Invalid Username or Password ",
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Find user login info
    const userData = userDatabase.find((user) => user.username === username);
    // Compare user info
    if (userData) {
      if (userData.password !== password) {
        alert(errorMsg.invalid);
        // console.log("invalid password");
      } else {
        localStorage.setItem(
          "userData",
          JSON.stringify({ username, password })
        );
        navigate("/home");
        console.log("berhasil login");
      }
    } else {
      alert(errorMsg.invalid);
    }
  };

  return (
    <div>
      <div className="title-login">LoginPage</div>
      <form className="input-wrapper" onSubmit={onSubmit}>
        <input
          placeholder="username"
          value={username}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          autoComplete="off"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
