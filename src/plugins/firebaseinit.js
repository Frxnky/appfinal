import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseApp = initializeApp({
     apiKey: "AIzaSyCstglhRWv3hjR6LyCgiH7_Y_12Rjwepzc",
  authDomain: "finalmata.firebaseapp.com",
  projectId: "finalmata",
  storageBucket: "finalmata.appspot.com",
  messagingSenderId: "1084647271015",
  appId: "1:1084647271015:web:b5cd2507cf2b204dfa42c2",
  measurementId: "G-G9MFPR0MT3"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, };
