import React, { useContext } from "react";
import { BsCameraVideo} from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const {data}= useContext(ChatContext)
  console.log(data)
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data?.user?.displayName}</span>
        <div className="chatIcons">
          <BsCameraVideo />
          <BiUserPlus />
          <FiMoreHorizontal />
        </div>
       
      </div> 
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
