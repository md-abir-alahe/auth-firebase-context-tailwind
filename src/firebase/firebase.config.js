// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkvghPWsDT_62ODbA6AD_RBJSvAh93ASw",
  authDomain: "auth-firebase-context-ta-3c7e9.firebaseapp.com",
  projectId: "auth-firebase-context-ta-3c7e9",
  storageBucket: "auth-firebase-context-ta-3c7e9.appspot.com",
  messagingSenderId: "205772277497",
  appId: "1:205772277497:web:462d4dabb4ec1e19f9c428",
  measurementId: "G-6GN6RR56W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;