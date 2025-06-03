import { useState } from "react";
import "./chat.scss";

function Chat() {
    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="msgs">
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
                <div className="msg">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Vibhaeo Mudia</span>
                    <p>Lorem ipsum dolor sit amet con</p>
                </div>
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
                        <div className="chatmsg">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmsg own">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmsg">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmsg owm">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmsg">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmsg own">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmsg">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatmsg">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing el</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea name="" id=""></textarea>
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chat;