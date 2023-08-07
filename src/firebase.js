// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeBrBgZe1BJD5f46bGsOAiSpqWHrqzGpk",
  authDomain: "weiron9.firebaseapp.com",
  projectId: "weiron9",
  storageBucket: "weiron9.appspot.com",
  messagingSenderId: "585249916098",
  appId: "1:585249916098:web:04ae1c5ec13403ff85675b"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export default getFirestore();