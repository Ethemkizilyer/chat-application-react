import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'

const Chats = () => {
  const [chats,setchats]=useState([])
  const {currentUser}= useContext(Context)
  const { dispatch } = useContext(ChatContext);
  useEffect(()=> {
    const getChats=()=>{
    const unsub=onSnapshot(doc(db,"userChats",currentUser?.uid),(doc)=> {
      setchats(doc.data())
      // console.log("Current data:",doc.data())
    })

   
    return ()=> {
      unsub();
    };} 
    currentUser.uid && getChats()
  },[currentUser?.uid])
  console.log(Object.entries(chats));

const handleSelect=(u)=>{
  dispatch({type:"CHANGE_USER",payload:u})
}

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1]?.userInfo)}>
          <img src={chat[1]?.userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1]?.userInfo.displayName}</span>
            <p>{chat[1]?.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chats