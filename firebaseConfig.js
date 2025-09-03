
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCUPsp0ngAk-v_s0VjkUrgRBv9Cx3P5EkE",
  authDomain: "ja-goals.firebaseapp.com",
  projectId: "ja-goals",
  storageBucket: "ja-goals.firebasestorage.app",
  messagingSenderId: "930689276336",
  appId: "1:930689276336:web:c583912a21c2056c4b9e75"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)