// import React from 'react'
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import apiRequest from "../../lib/apiRequest";


function Navbar() {
  const [open, setOpen] = useState(false);
   const {currentUser, updateUser} = useContext(AuthContext);
   const navigate = useNavigate();
   
   
   console.log("Current user data:", currentUser);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav>
      
      <div className="left">
        <a href="/" className="logo">
          <img src="bglogo.png" alt="logo" />
          <span className=""><span className="nest">Nest</span>Ease</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact </a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpeg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>
            </Link>
            <button onClick={handleLogout} className="logout">Logout</button>
          </div>
        ) : (
          <>
            <a href="/login">Sign in </a>
            <a href="/register " className="register">
              Sign Up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a> 
          <a href="/">Contact </a>
          <a href="/">Agents</a>
          {currentUser ? (
            <>
              <a href="/profile">Profile</a>
              <a href="#" onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <>
              <a href="/login">Sign in </a>
              <a href="/register">Sign Up </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
