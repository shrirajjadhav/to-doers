// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "PASTE_YOUR_FIREBASE_PROJECT_CONFIG_KEYS",
  authDomain: "PASTE_YOUR_FIREBASE_PROJECT_CONFIG_KEYS",
  projectId: "PASTE_YOUR_FIREBASE_PROJECT_CONFIG_KEYS",
  storageBucket: "PASTE_YOUR_FIREBASE_PROJECT_CONFIG_KEYS",
  messagingSenderId: "PASTE_YOUR_FIREBASE_PROJECT_CONFIG_KEYS",
  appId: "PASTE_YOUR_FIREBASE_PROJECT_CONFIG_KEYS",
  measurementId: "PASTE_YOUR_FIREBASE_PROJECT_CONFIG_KEYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}