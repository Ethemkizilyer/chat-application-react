import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  console.log(message);

  const { currentUser } = useContext(Context);
  const { data } = useContext(ChatContext);

  let ref=useRef()

  useEffect(()=>{
    
    ref.current?.scrollIntoView({ behavior: "smooth", inline: "center" });
  },[message])

  let asd= String(new Date(message.createdAt.seconds * 1000)).split(" ");
  // console.log(asd[2], asd[1], asd[0], asd[4]);

  return (
    <div
      className={`message ${message.senderId === currentUser.id && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.id
              ? currentUser.avatar
              : data.user.avatar
          }
          alt=""
        />
        <span>{asd[4]?.slice(0,5)}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
