// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDsG9TNARYZCYMnLUbZUC2mdvBx3B0ew5k',
  authDomain: 'food-forage-7b318.firebaseapp.com',
  projectId: 'food-forage-7b318',
  storageBucket: 'food-forage-7b318.appspot.com',
  messagingSenderId: '227412534394',
  appId: '1:227412534394:web:a64b4450f8050528cc07c3',
  measurementId: 'G-2CFXRCFJNT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db, app };
