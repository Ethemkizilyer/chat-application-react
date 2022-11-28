import React from 'react'

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div className="userChatInfo">
          <span>Saruman</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div className="userChatInfo">
          <span>Saruman</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats