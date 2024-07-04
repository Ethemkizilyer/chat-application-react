import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { Context } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const {currentUser}= useContext(Context)
    const INITIAL_STATE={
        chatId:"null",
        user:{}
    }
console.log(currentUser)
    const chatReducer=(state,action)=> {
        switch (action.type){
            case "CHANGE_USER":
                return {
                    user:action.payload,
                    chatId:
                    currentUser.id > action.payload.uid ? currentUser.id + action.payload.uid : action.payload.uid + currentUser.id,
                };

                default:
                    return state;
        }
    }
  const [state,dispatch]= useReducer(chatReducer,INITIAL_STATE)

  return (
    <ChatContext.Provider value={{ data:state,dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
