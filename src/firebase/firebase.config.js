// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh17fVkWRvcCW3cCKZ-2JPoT8398oDJSE",
  authDomain: "riasatraihan-4f261.firebaseapp.com",
  projectId: "riasatraihan-4f261",
  storageBucket: "riasatraihan-4f261.appspot.com",
  messagingSenderId: "465124532489",
  appId: "1:465124532489:web:f9709c62efc45a5ca6b3d8",
  measurementId: "G-DLJR7ZFCTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;