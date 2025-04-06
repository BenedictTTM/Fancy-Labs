// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFmrFAtH0NFLipbHQE-yyvVssEE4YgO3k",
  authDomain: "progress-f0732.firebaseapp.com",
  projectId: "progress-f0732",
  storageBucket: "progress-f0732.firebasestorage.app",
  messagingSenderId: "21746755482",
  appId: "1:21746755482:web:429149b0c5f5e6b46bfc23",
  measurementId: "G-H2N71V4E6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app); // Initialize Firestore
 // Initialize Firebase Storage
export default app;