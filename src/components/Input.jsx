import { uuidv4 } from "@firebase/util";
import { arrayUnion, doc, getDoc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";
import { Context } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import upload from "../upload";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });
  const { currentUser } = useContext(Context);
  const { data } = useContext(ChatContext);
console.log(data)

const handleImg = (e) => {
  console.log("img", e.target.files);
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
      console.log("Image selected: ", e.target.files[0]);
    } else {
      console.log("No file selected");
    }
};
console.log("img",img)
  const handleSend = async () => {
    let imgUrl = null;
    if (img.file) {
      imgUrl = await upload(img.file);
          
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                senderId: currentUser.id,
                createdAt: new Date(),
                ...(imgUrl && { img: imgUrl }),
              }),
            });
          
      
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });
      const userIDs = [currentUser.id, data.user.id];
      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === data.chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      })
    }

    
    setText("")
    setImg({
      file: null,
      url: "",
    });
  };
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKeyPress}
      />
      <div className="send">
        <IoMdAttach />
        <input
        type="file"
        id="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImg}
      />
      <label htmlFor="file">
        <RiImageAddLine />
      </label>
      {img.url && <img width="50px" height="50px" style={{width:"30px",height:"30px"}} src={img.url} alt="Selected" />}
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
