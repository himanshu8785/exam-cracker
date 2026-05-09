import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9bEDqU36tLb472xP6aWDqIRpdOgtTYKI",
  authDomain: "examcracker-07.firebaseapp.com",
  projectId: "examcracker-07",
  storageBucket: "examcracker-07.firebasestorage.app",
  messagingSenderId: "627093985071",
  appId: "1:627093985071:web:337f98caf8b27c3dafb3da",
  measurementId: "G-LXN7PEXLCR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);