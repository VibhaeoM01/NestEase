import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profile.scss";
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate=useNavigate();
  const handlelogout = async ()=>
  {
    try{
      const res= apiRequest.post("/auth/logout") 
      localStorage.removeItem("user");
      navigate("/") 
    }
    catch(err){
      console.log(err);;
    }
  }
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
            </div>
            <div className="info">
                <span>Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
              <span>UserName: <b>Vibhaeo Mudia</b></span>
              <span>Email: <b>vibhaeom1105@gmail.com</b></span>
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