// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCniAhu0qWb0g_-nlFIZ1z54NAruJnObPg",
  authDomain: "login-242f6.firebaseapp.com",
  projectId: "login-242f6",
  storageBucket: "login-242f6.appspot.com",
  messagingSenderId: "282819635075",
  appId: "1:282819635075:web:e5a3c5d5effaf0d550f8b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
