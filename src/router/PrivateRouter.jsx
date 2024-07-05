import React, { useContext,useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from '../context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const PrivateRouter = () => {
    const {currentUser}= useContext(Context)
    const [userr,setUser]=useState(currentUser)
    useEffect(()=>{
        onAuthStateChanged(auth, async(user)=> {
            const docRef=doc(db,"users",user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setUser(docSnap.data());  
            }
            
        })
        
    },[currentUser])
    

return userr?.username ? <Outlet /> : <Navigate to="/login" />;

}

export default PrivateRouter