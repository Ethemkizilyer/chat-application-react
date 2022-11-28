import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Bakar Chat</span>
      <div className="user">
        <img
          src=
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar