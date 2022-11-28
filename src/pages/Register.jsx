import React from "react";

import {BiImageAdd} from "react-icons/bi";


const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bakar Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="dislay name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <BiImageAdd/>
   <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
