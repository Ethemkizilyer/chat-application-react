import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  console.log(message);

  const { currentUser } = useContext(Context);
  const { data } = useContext(ChatContext);

  const ref=useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})

  },[message])

  let asd= String(new Date(message.date.seconds * 1000)).split(" ");
  // console.log(asd[2], asd[1], asd[0], asd[4]);

  return (
    <div
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
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
