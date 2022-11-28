import React from "react";
import { BsCameraVideo} from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Ethem</span>
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
