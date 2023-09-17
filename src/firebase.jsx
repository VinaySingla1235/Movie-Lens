// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
// import {firebase} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNsg9O3TdivFL-Wme2PHAXmyabvJbwQsM",
  authDomain: "movie-lens-ff468.firebaseapp.com",
  projectId: "movie-lens-ff468",
  storageBucket: "movie-lens-ff468.appspot.com",
  messagingSenderId: "102622031255",
  appId: "1:102622031255:web:9b1dfc0046de07a1a2e8d2",
  measurementId: "G-4J888NLLG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
export {provider,app,auth}