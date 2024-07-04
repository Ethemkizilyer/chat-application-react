import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { BiImageAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
  const navigate= useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res= await signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log("user",user)
        navigate("/");
        alert("Hoşgeldin")
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

          if (errorCode === 'auth/user-not-found') {
            console.log("Account doesn't exist.");
          } else if (errorCode === 'auth/wrong-password') {
            console.log('Invalid password.');
          } else {
            console.log('Something went wrong.');
          }
        })
        .finally(() => {
          console.log(false);
        });
    } catch (err) {
        console.error(err.code, err.message);
        setErr(true);
    }
};



  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bakar Chat</span>
        <span className="title">Login</span>
        <form>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
