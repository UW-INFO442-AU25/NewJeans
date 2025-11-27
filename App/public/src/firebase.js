// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfk5ltwCrOE8FttNEBRZOeqR1vBFF2MHc",
  authDomain: "info-442-new-jeans.firebaseapp.com",
  projectId: "info-442-new-jeans",
  storageBucket: "info-442-new-jeans.firebasestorage.app",
  messagingSenderId: "825218818493",
  appId: "1:825218818493:web:77752330985ef8afee72d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Realtime Database and get a reference to the service
export const rtdb = getDatabase(app);

// Initialize Firebase Storage for file uploads (e.g., passports)
export const storage = getStorage(app);

export default app;