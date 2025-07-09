import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profile.scss";
import {apiRequest} from "../../lib/apiRequest";
import { useNavigate, Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { postsResponse, chatsResponse } = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);

  const decrease = () => {
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

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
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List posts={postsResponse.userPosts} />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List posts={postsResponse.savedPosts} />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <div className="title">
            <h1>Chat List {unreadCount > 0 && <span>({unreadCount} unread)</span>}</h1>
          </div>
          <Chat chats={chatsResponse} decrease={decrease} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
