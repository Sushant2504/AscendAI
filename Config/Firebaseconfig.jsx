// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACBnz3H1tuPcsdMohjPiMGV0eacYeOXPs",
  authDomain: "ascendai-7f18c.firebaseapp.com",
  projectId: "ascendai-7f18c",
  storageBucket: "ascendai-7f18c.firebasestorage.app",
  messagingSenderId: "303488139257",
  appId: "1:303488139257:web:5b630173ca1d61d8c74728",
  measurementId: "G-C5Q8T4RETL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);