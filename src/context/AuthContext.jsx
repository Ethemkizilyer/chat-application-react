import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";


export const Context= createContext();

export const ContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=> {
            setCurrentUser(user);
            console.log(user)
        })
    },[])

    return (
      <Context.Provider value={{ currentUser }}>{children}</Context.Provider>
    );
}