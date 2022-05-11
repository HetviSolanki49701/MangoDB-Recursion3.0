import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOgAOrW-VXWLhz3Oi0dijZUvyRPm3otV0",
  authDomain: "vcare-f4f6d.firebaseapp.com",
  projectId: "vcare-f4f6d",
  storageBucket: "vcare-f4f6d.appspot.com",
  messagingSenderId: "229181038453",
  appId: "1:229181038453:web:d94903ea410ca3ac12fd3c",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);