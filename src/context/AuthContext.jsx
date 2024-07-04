import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";


export const Context= createContext();

export const ContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState({});

    useEffect(()=>{
        onAuthStateChanged(auth, async(user)=> {
            const docRef=doc(db,"users",user.uid)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
              setCurrentUser(docSnap.data());  
            }
            
            console.log(user)
        })
        
    },[])

    return (
      <Context.Provider value={{ currentUser }}>{children}</Context.Provider>
    );
}