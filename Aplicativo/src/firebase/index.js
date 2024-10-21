// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDECiW2uou4TgrMJK8wgjw8uMdDyHGxghk",
  authDomain: "bi-atitudinal1-pdm.firebaseapp.com",
  projectId: "bi-atitudinal1-pdm",
  storageBucket: "bi-atitudinal1-pdm.appspot.com",
  messagingSenderId: "736371088985",
  appId: "1:736371088985:web:06899ff04657da5f1f9b48",
  measurementId: "G-YZ1MW8L2E4"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);