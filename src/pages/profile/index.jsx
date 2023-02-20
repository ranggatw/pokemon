import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("userData"));
  const Logout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };
  return (
    <div>
      <h3>Profile</h3>
      <div>
        <div>username : {profile.username}</div>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
