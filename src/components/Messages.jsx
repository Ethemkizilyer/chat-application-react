import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import Message from './Message'

const Messages = () => {
  const [messages,setMessages]= useState([])

  const {data}= useContext(ChatContext)
console.log(data)
  useEffect(()=>{
    const unSub= onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
      console.log(data,doc.data().messages)
      
      doc.exists() && setMessages(doc.data().messages)
    })

    return ()=>{
      unSub()
    }
  },[data.chatId])
  console.log(messages)
  // console.log(new Date(messages[3].date))
  return (
    <div className="messages">
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}

export default Messages