// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX6hxdBBfwatm6USBclbW3jqPZ3LirXJM",
  authDomain: "myfirstproject-650f3.firebaseapp.com",
  projectId: "myfirstproject-650f3",
  storageBucket: "myfirstproject-650f3.appspot.com",
  messagingSenderId: "501403899171",
  appId: "1:501403899171:web:ab7cb5064d05a1ebca2896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;