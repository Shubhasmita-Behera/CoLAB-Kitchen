// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuTOBG6i3dze1Lh5C3LvdEm6OjkvAfRxk",
  authDomain: "login-8e07f.firebaseapp.com",
  projectId: "login-8e07f",
  storageBucket: "login-8e07f.appspot.com",
  messagingSenderId: "224734757565",
  appId: "1:224734757565:web:274850f1c9ba8d9e73add4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app , auth}