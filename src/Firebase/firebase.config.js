// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSXZj5ltw_IdpwwWAcI1ThPnaZPy7nhWI",
  authDomain: "my-first-shop-e37d7.firebaseapp.com",
  projectId: "my-first-shop-e37d7",
  storageBucket: "my-first-shop-e37d7.appspot.com",
  messagingSenderId: "43118873215",
  appId: "1:43118873215:web:62e15a5e21bc180bac8d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth