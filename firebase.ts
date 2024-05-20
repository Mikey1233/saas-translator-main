import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLUaTi2EYE5C7JfFkmwJ1DIObevkc60ng",
  authDomain: "saas-app-test.firebaseapp.com",
  projectId: "saas-app-test",
  storageBucket: "saas-app-test.appspot.com",
  messagingSenderId: "334685200863",
  appId: "1:334685200863:web:9136a4e41013928a05a46a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
