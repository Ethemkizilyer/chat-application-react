import React, { useContext,useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from '../context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const PrivateRouter = () => {
    const {currentUser}= useContext(Context)
    console.log("currentUser",currentUser)

return currentUser.username ? <Outlet /> : <Navigate to="/login" />;

}

export default PrivateRouter