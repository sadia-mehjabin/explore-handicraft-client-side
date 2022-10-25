// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5arLcDrSRH1bLd4ulbNTMXUva5biJh2M",
  authDomain: "explore-handicraft-world.firebaseapp.com",
  projectId: "explore-handicraft-world",
  storageBucket: "explore-handicraft-world.appspot.com",
  messagingSenderId: "1004325102062",
  appId: "1:1004325102062:web:a3b23d9aa3784206756eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;