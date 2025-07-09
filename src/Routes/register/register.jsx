import "./register.scss"
import { Link, useNavigate } from "react-router-dom";

import {apiRequest} from "../../lib/apiRequest"
import { useState } from "react";

function Register() {
    const [error,setError]=useState("");
    const navigate = useNavigate();
    const handlesubmit = async (e) =>{
        e.preventDefault();
        const formdata=new FormData(e.target);

        const username=formdata.get("username");
        const email=formdata.get("email");
        const password=formdata.get("password");
        // console.log(username,email,password);

        try{
            const res=await apiRequest.post("/auth/register",{username,email,password})
            // console.log(res.data)
            navigate("/login");
        }
       
        
        catch(err)
        { 
            setError(err.response.data.message);
            console.log(err);
        }
    };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handlesubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="bg1 up.png" alt="" />
      </div>
    </div>
  );
}

export default Register;

