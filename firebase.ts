import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCig_QNaHBncMBn-JxVmb7IQzdD0prBgsg",
  authDomain: "chatgpt-clone-f6170.firebaseapp.com",
  projectId: "chatgpt-clone-f6170",
  storageBucket: "chatgpt-clone-f6170.appspot.com",
  messagingSenderId: "1075543041870",
  appId: "1:1075543041870:web:04447530a070566bce201f",
};

// Initialize Firebase and get a single instance out of all the instances
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Get Firestore database
const db = getFirestore(app);

export { db };
