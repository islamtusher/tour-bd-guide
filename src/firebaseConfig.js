// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs77SvgqCzLPyhRlD2R7GNcw3eJkIxNYI",
  authDomain: "travel-bd-guide.firebaseapp.com",
  projectId: "travel-bd-guide",
  storageBucket: "travel-bd-guide.appspot.com",
  messagingSenderId: "840885759682",
  appId: "1:840885759682:web:1fc2db96488742c4ed955b"
};


// Initialize Firebase

const auth = getAuth(initializeApp(firebaseConfig))

export default auth;