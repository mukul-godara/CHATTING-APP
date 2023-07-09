import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo5JMfTWSuM43_hhyEs8wZyTPlU9e-rp8",
  authDomain: "chatting-8a6ff.firebaseapp.com",
  projectId: "chatting-8a6ff",
  storageBucket: "chatting-8a6ff.appspot.com",
  messagingSenderId: "574037669479",
  appId: "1:574037669479:web:8e6e53b352198ccc0cc6c2",
  measurementId: "G-3Z85P4ZGHG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
console.log(db)
