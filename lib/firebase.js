import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDj1-qP7fjRckn-EW7d5kf2wG3yG7oWQ0Q",
  authDomain: "studentsphere1234.firebaseapp.com",
  projectId: "studentsphere1234",
  storageBucket: "studentsphere1234.firebasestorage.app",
  messagingSenderId: "955887392931",
  appId: "1:955887392931:web:27962c94b4a2aed3284716"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();


// Firebase auth functions
export const firebaseAuth = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
};
export const firebaseDB = {
  collection,
  addDoc,
};