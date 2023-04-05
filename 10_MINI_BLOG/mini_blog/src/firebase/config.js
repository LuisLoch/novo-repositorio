import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBI1PGUXak_UZT42HHZsIIRw4z5gydvHm4",
  authDomain: "miniblog-d65bd.firebaseapp.com",
  projectId: "miniblog-d65bd",
  storageBucket: "miniblog-d65bd.appspot.com",
  messagingSenderId: "397114292991",
  appId: "1:397114292991:web:e6c0930fa748cb9262eaca"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }