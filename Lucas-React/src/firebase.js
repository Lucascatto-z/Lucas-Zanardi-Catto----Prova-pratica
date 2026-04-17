import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxCiH_wBGNSAENJkjJphXin_rIzTHqEH4",
    authDomain: "prova--lucas.firebaseapp.com",
    projectId: "prova--lucas",
    storageBucket: "prova--lucas.firebasestorage.app",
    messagingSenderId: "251685294513",
    appId: "1:251685294513:web:75ff18911e6ce8a913ed90"
};
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
