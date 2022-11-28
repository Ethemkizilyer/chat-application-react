
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1d-zAvTxTjI5mGP4ApURudPTw_FEkk0Q",
  authDomain: "chat-163a8.firebaseapp.com",
  projectId: "chat-163a8",
  storageBucket: "chat-163a8.appspot.com",
  messagingSenderId: "624741000552",
  appId: "1:624741000552:web:8ada3fb8c061e131fb22dd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
