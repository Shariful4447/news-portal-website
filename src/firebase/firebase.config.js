// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOrLoeMHvNO4GAEWoxLCXrr8xRi38fimQ",
  authDomain: "news-portal-website-c4662.firebaseapp.com",
  projectId: "news-portal-website-c4662",
  storageBucket: "news-portal-website-c4662.appspot.com",
  messagingSenderId: "867497887925",
  appId: "1:867497887925:web:c0a19fd759589ab90216fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;