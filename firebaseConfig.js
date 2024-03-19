import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALN3hZ_klOMTBfO0s3xuk1wyBeJDmmXYg",
  authDomain: "owiestreamit.firebaseapp.com",
  projectId: "owiestreamit",
  storageBucket: "owiestreamit.appspot.com",
  messagingSenderId: "1098104889044",
  appId: "1:1098104889044:web:5979a61907cb0a99492541",
  measurementId: "G-65T0BLQ967"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default app;
