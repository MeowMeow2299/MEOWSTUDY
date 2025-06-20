// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUbIIa8LKo2Rpn1wfMVduDC9nCuTh7tU",
  authDomain: "notemeow-4c9a7.firebaseapp.com",
  projectId: "notemeow-4c9a7",
  storageBucket: "notemeow-4c9a7.firebasestorage.app",
  messagingSenderId: "764674651461",
  appId: "1:764674651461:web:ccb9a1912be8c5a187fa2c"
};

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth(app)

// 🔥 DÒNG NÀY LÀ QUAN TRỌNG!
export { db, auth }