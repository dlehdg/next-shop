// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVGqSdzGMgcoTo0ReS3jt6pp5V4fMSSFM",
  authDomain: "react-next-shop-8a820.firebaseapp.com",
  projectId: "react-next-shop-8a820",
  storageBucket: "react-next-shop-8a820.appspot.com",
  messagingSenderId: "813020000652",
  appId: "1:813020000652:web:7e5b773b071a5b240466a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);