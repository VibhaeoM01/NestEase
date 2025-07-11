import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";
import { apiRequest } from "../../lib/apiRequest";
import {format} from "timeago.js";
import "./chat.scss";

function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const messageEndRef = useRef();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
//   const decrease = useNotificationStore((state) => state.decrease);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest.get(`/chats/${id}`);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setCurrentChat({ ...res.data, receiver, messages: res.data.messages });
      setMessages(res.data.messages);
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
    const fetchMessages = async () => {
      if (currentChat) {
        try {
          const res = await apiRequest.get(`/messages/${currentChat._id}`);
          setMessages(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchMessages();
  }, [currentChat]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const text =formData.get("text")
    if(!text) return;
    try{
        const res = await apiRequest.post(`/messages/${chat.id}`, { text });
        setChat((prev)=>({...prev,messages:[...prev.messages,res.data]}));
        e.target.reset()
    }
    catch(err)
    {
        console.log(err);
    }
  }

  return (
    <div className="chat">
      <div className="msgs">
        {chats?.map((c) => (
          <div
            className="msg"
            key={c._id}
            onClick={() => handleOpenChat(c._id, c.receiver)}
          >
            <img src="/noavatar.jpeg" alt="" />
            <span>{c.user?.username}</span>
            <p>{c.lastMessage?.text}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img src="" alt="" />
              Vibhaeo Mudia
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div className="chatmsg"
                style={{
                    alignSelf:message.userId===currentUser.id ? "flex-end" : "flex-start",
                    textAlign:message.userId===currentUser.id ? "right" : "left",
                }}
                key={message.id}>
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text" id=""></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
