import { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import "./layout.scss";
import {Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Layout() {
  return (
       <div className="layout">
            <div className="navbar">
            <Navbar/>
            </div>

            <div className="content">
            <Outlet />
            </div>
    </div>
  );
}

function RequireAuth() {
  
  const {currentUser}=useContext(AuthContext);
  return (
       !currentUser ?  (<Navigate to="/login" />) :  (<div className="layout">
            <div className="navbar">
            <Navbar/>
            </div>

            <div className="content">
            <Outlet />
            </div>
    </div>
    ));

}
export {Layout, RequireAuth};