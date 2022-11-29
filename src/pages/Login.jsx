import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { BiImageAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
  const navigate= useNavigate()
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

const handleSubmit=async(e)=>{
  e.preventDefault()
  try{
    const user= await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
    navigate(-1)
    alert("Hoşgeldin")
  } catch(err){
    // alert(err.message)
    setErr(true)
  }
}



  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bakar Chat</span>
        <span className="title">Login</span>
        <form>
          <input
            type="email"
            placeholder="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Sign in</button>
        </form>
        <p>
          You don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
        {err && <span>Something went wrong</span>}
      </div>
    </div>
  );
};

export default Login;
