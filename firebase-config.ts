// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACR08V98oY_Tws8VS1VnHVDADrcdoiMIw",
  authDomain: "portfolio-juan-augusto-haser.firebaseapp.com",
  projectId: "portfolio-juan-augusto-haser",
  storageBucket: "portfolio-juan-augusto-haser.firebasestorage.app",
  messagingSenderId: "451898706324",
  appId: "1:451898706324:web:0d6d072832edf7d524e781",
  measurementId: "G-C1NXE53G7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);