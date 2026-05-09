import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo7IdV5JtKOdnh28AA0zmiESdPAFk88wo",
  authDomain: "exam-cracker-16.firebaseapp.com",
  projectId: "exam-cracker-16",
  storageBucket: "exam-cracker-16.firebasestorage.app",
  messagingSenderId: "278430144732",
  appId: "1:278430144732:web:332a08959b458c955fbc19"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);