import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiO6eKqRX6Hzy7bL62XbmdEbfue7Y6R3Q",
  authDomain: "chatss-24005.firebaseapp.com",
  projectId: "chatss-24005",
  storageBucket: "chatss-24005.appspot.com",
  messagingSenderId: "726757449916",
  appId: "1:726757449916:web:cb60f482cf965d2748f0b9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore()
