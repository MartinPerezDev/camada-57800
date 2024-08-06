import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAcvjGxLnepFjl-OpLYL-ZQlVpYedvs0aI",
  authDomain: "ecommerce-57800.firebaseapp.com",
  projectId: "ecommerce-57800",
  storageBucket: "ecommerce-57800.appspot.com",
  messagingSenderId: "706887119199",
  appId: "1:706887119199:web:806455e8267d8669a346ea"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db
