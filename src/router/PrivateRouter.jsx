import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from '../context/AuthContext'

const PrivateRouter = () => {
    const {currentUser}= useContext(Context)

return currentUser ? <Outlet /> : <Navigate to="/login" />;

}

export default PrivateRouter