import { useContext, useState } from "react";
import "./login.scss";
  import apiRequest from "../../lib/apiRequest"
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error,setError]=useState("");
  const [IsLoading,setIsLoading]=useState(false);


  const {updateUser} = useContext(AuthContext);
  
    const navigate = useNavigate();
    const handlesubmit = async (e) =>{
        e.preventDefault(); 
        setIsLoading(true);
        setError("");
        const formdata=new FormData(e.target);

        const username=formdata.get("username");
        const password=formdata.get("password");
        // console.log(username,email,password);

        try{
            const res=await apiRequest.post("/auth/login",{username,password})
           ;
            updateUser(res.data);
             // console.log(res.data)
            navigate("/");
        }
        catch(err)
        { 
            setError(err.response.data.message);
            // console.log(err);
        }
        finally{
          setIsLoading(false);
        }
    };
  return (
    <div className="login">
    <div className="formContainer">
      <form onSubmit={handlesubmit}>
        <h1>Welcome Back</h1>
        <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
        <input name="password" required type="password" placeholder="Password" />
        <button disabled={IsLoading}>Login</button>
        {error && <span>{error}</span>}
        <Link to="/register">Don't have an account?</Link>
      </form>
    </div>
    <div className="imgContainer">
      <img src="/bg1 up.png" alt="" />
    </div>
  </div>
  );
}

export default Login;