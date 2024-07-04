import React, { useState } from "react";

import { BiImageAdd } from "react-icons/bi";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import upload from "../upload";

const Register = () => {
  const [err, setErr] = useState(false);
  const [avatar, setAvatar] = useState({
    file:null,
    url:""
  });

  const handleAvatar =e=>{
    if(e.target.files[0]){
     setAvatar({
      file:e.target.files[0],
      url:URL.createObjectURL(e.target.files[0])
    }) 
    }
    
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("asd",e.target[3].value)
    // const username = e.target[0].value;
    // const email = e.target[1].value;
    // const password = e.target[2].value;
    // const file = e.target[3].files[0];

    const formData = new FormData(e.target)

    const {username,email,password}=Object.fromEntries(formData)
    console.log(username)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file)
      await setDoc(doc(db,"users",res.user.uid),{
        username,
        email,
        avatar:imgUrl,
        id:res.user.uid,

      })
      await setDoc(doc(db,"userchats",res.user.uid),{
        chats:[]

      })

      // const storageRef = ref(storage, username);

      // const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      // uploadTask.on(
      //   (error) => {
      //     setErr(true);
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       await updateProfile(res.user, {
      //         username,
      //         photoURL: downloadURL,
      //       });
      //       await setDoc(doc(db, "users", res.user.uid), {
      //         id: res.user.uid,
      //         username,
      //         email: email,
      //         photoURL: downloadURL,
      //       });
      //       await setDoc(doc(db, "userchats", res.user.uid), {});
      //       navigate("/");
      //     });
      //   }
      // );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bakar Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="dislay name" name="username" />
          <input type="email" placeholder="email" name="email"/>
          <input type="password" placeholder="password" name="password"/>
          <input style={{ display: "none" }} type="file" id="file" onChange={handleAvatar}/>
          <label htmlFor="file">
            <img src={avatar.url} alt="" />
            Upload an image
            {/* <BiImageAdd />
            <span>Add an avatar</span> */}
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? <Link to={"/login"}>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
