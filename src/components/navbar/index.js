import React from "react";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper-navbar">
      <ul className="list">
        <Link to="/home">Home</Link>
        <Link to="/library">Pokemon Library</Link>
        <Link to="/pokemon">Get Pokemon</Link>
        <Link to="/profile">Profile</Link>
      </ul>
    </div>
  );
};

export default Navbar;
