// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpijK-gNHkV-H1wKPG3uUsg-2XzfsuPoA",
  authDomain: "raj-paintings.firebaseapp.com",
  projectId: "raj-paintings",
  storageBucket: "raj-paintings.firebasestorage.app",
  messagingSenderId: "296654087449",
  appId: "1:296654087449:web:4dd3029510fe9044489188"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);