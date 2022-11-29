import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { Context } from '../context/AuthContext';
import { auth } from '../firebase';

const Navbar = () => {
  const  {currentUser}=useContext(Context)
  return (
    <div className="navbar">
      <span className="logo">Bakar Chat</span>
      <div className="user">
        <img
          src=
            {currentUser?.photoURL}
          
          alt=""
        />
        <span>{currentUser?.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar