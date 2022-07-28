// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import 'firebaseui/dist/firebaseui.css';


const firebaseConfig = {
  apiKey: "AIzaSyAkg0gLnxSXG1_667gpwijJphlvVSEe_90",
  authDomain: "tiktokclone-39d1c.firebaseapp.com",
  projectId: "tiktokclone-39d1c",
  storageBucket: "tiktokclone-39d1c.appspot.com",
  messagingSenderId: "559188463680",
  appId: "1:559188463680:web:1c568f90f8b0afb0b10fa5"
};

// firebase.initializeApp(config)
const app = initializeApp(firebaseConfig);

// get a database reference
const database = getDatabase(app)

// auth 
export const auth = getAuth(app)
export const authSignOut = signOut(auth)