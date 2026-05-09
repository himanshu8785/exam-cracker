import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9bEDqU36tLb472xP6aWDqIRpd0gtTYKI",
  authDomain: "examcracker-07.firebaseapp.com",
  projectId: "examcracker-07",
  storageBucket: "examcracker-07.firebasestorage.app",
  messagingSenderId: "627093985071",
  appId: "1:627093985071:web:337f98caf8b27c3dafb3da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);