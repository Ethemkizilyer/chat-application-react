import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/AuthContext'
import { db } from '../firebase'

const Chats = () => {
  const [chats,setchats]=useState([])
  const {currentUser}= useContext(Context)
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
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1]?.userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1]?.userInfo.displayName}</span>
            <p>{chat[1]?.userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chats