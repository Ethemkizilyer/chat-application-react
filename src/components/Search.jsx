import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Context } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(Context);
   const { dispatch } = useContext(ChatContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("username", "==", username)
    );
    const asd = await getDocs(q);
console.log(asd)
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        setUser(doc.data());
        dispatch({ type: "CHANGE_USER", payload: doc.data() });
      });
    } catch (err) {
      console.log(err.message);
      setErr(true);
    }

  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // group mesajı firestore da var mı yok mu kontrol için eğer yoksa 1 tane oluştur
    const combinedId =
      currentUser.id > user.id
        ? currentUser.id + user.id
        : user.id + currentUser.id;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //sohbet oluştur
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //Kullanıcı sohbetleri oluşturulacak
        await updateDoc(doc(db, "userchats", currentUser.id), {
          [combinedId + ".userInfo"]: {
            id: user.id,
            username: user.username,
            avatar: user.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        //Buda diğer kullanıcı için
        await updateDoc(doc(db, "userchats", user.id), {
          [combinedId + ".userInfo"]: {
            id: currentUser.id,
            username: currentUser.username,
            avatar: currentUser.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null)
    setUsername("")

    //kullanıcı sohbetileri oluştur
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Find a user"
          value={username}
        />
      </div>
      {err && <span>User not found</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user?.avatar} alt="" />
          <div className="userChatInfo">
            <span>{user?.username}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
