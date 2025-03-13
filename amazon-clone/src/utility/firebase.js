// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOuojqAefnDcx6R_RgPMTOMf_voI0-7ak",
  authDomain: "clone-b429a.firebaseapp.com",
  projectId: "clone-b429a",
  storageBucket: "clone-b429a.firebasestorage.app",
  messagingSenderId: "1096915601338",
  appId: "1:1096915601338:web:59b6e26de3d589ffebbf83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);