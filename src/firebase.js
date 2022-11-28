import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGDHUBQWCfsplAJOCaDEwV1ekEr3TTp20",
  authDomain: "chats-f93b1.firebaseapp.com",
  projectId: "chats-f93b1",
  storageBucket: "chats-f93b1.appspot.com",
  messagingSenderId: "405467589347",
  appId: "1:405467589347:web:d53162233c753d33bcb3d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()
