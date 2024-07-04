import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA1gcZnkWzxLPvFNGyU5y19vm9BmLZySHQ",
  authDomain: "reactchats-75f4e.firebaseapp.com",
  projectId: "reactchats-75f4e",
  storageBucket: "reactchats-75f4e.appspot.com",
  messagingSenderId: "638499853955",
  appId: "1:638499853955:web:6197a464dbab11eb70adb6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()
