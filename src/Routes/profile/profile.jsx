import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profile.scss";
import apiRequest from "../../lib/apiRequest"
import { useNavigate, Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { userPosts } = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
    <div className="profile">
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
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My Posts</h1>
            <Link to="/add"><button>Create New Post</button></Link>
          </div>
          {userPosts && userPosts.length > 0 ? (
            <List posts={userPosts} />
          ) : (
            <p>No posts yet. Create your first post!</p>
          )}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Profile;