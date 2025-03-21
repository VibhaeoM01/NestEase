import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profile.scss";
import apiRequest from "../../lib/apiRequest"
import { useNavigate,Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {

 const{updateUser,currentUser}=useContext(AuthContext);
  const navigate=useNavigate();

  const handlelogout = async ()=>
  {
    try{
      await apiRequest.post("/auth/logout") 
      // localStorage.removeItem("user");
      updateUser(null);
      navigate("/") 
    }
    catch(err){
      console.log(err);;
    }
  }
  return ( <div className="profile">
      <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <Link to="/profile/update"><button>Update Profile</button></Link>
            </div>
            <div className="info">
                <span>Avatar: <img src={currentUser.avatar || "noavatar.jpeg"} alt="" /></span>
              <span>UserName: <b>{currentUser.username}</b></span>
              <span>Email: <b>{currentUser.email}</b></span>
              <button onClick={handlelogout}>Logout</button>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button >Create New Post</button>
            </div>
            <List /> 
            <div className="title">
                <h1>Saved List</h1> 
            </div>
            <List />
        </div>
        </div>
      <div className="chatContainer"><div className="wrapper">
        <Chat/>
        </div></div>
    </div>
  );
}


export default Profile;