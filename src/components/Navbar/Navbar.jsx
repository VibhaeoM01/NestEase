// import React from 'react'
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";


function Navbar() {
  const [open, setOpen] = useState(false);
   const {currentUser} = useContext(AuthContext);3
   
   
   console.log("Current user data:", currentUser);

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
          <a href="/">Sign in </a>
          <a href="/">Sign Up </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
