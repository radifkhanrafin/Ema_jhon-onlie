// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFeF-rQGTTwh_F8B0EPGD5b3xhu5yAU1M",
  authDomain: "ema-jone-with-firebase-d6f6e.firebaseapp.com",
  projectId: "ema-jone-with-firebase-d6f6e",
  storageBucket: "ema-jone-with-firebase-d6f6e.appspot.com",
  messagingSenderId: "877201497397",
  appId: "1:877201497397:web:74055a1aee40bf56e5807c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app