// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlu4BOMXS0Ue9Tg7PW10v4THuk9bfHR8s",
  authDomain: "reguler-b.firebaseapp.com",
  databaseURL:
    "https://reguler-b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reguler-b",
  storageBucket: "reguler-b.appspot.com",
  messagingSenderId: "1080581074261",
  appId: "1:1080581074261:web:e05f6d867a0c6ed95613dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
