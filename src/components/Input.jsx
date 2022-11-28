import React from 'react'
import {IoMdAttach} from "react-icons/io" 
import { RiImageAddLine } from "react-icons/ri"; 

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <IoMdAttach/>
        <img src="" alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <RiImageAddLine/>
          <img src="" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input