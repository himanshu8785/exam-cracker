"use client";

import { useState,useEffect } from "react";

import Link from "next/link";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "../firebase";

export default function Home() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [isLogin,setIsLogin] = useState(true);

  const [user,setUser] = useState(null);

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

      setUser(currentUser);

    });

    return ()=>unsubscribe();

  },[]);

  async function handleAuth(){

    try{

      if(isLogin){

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("Login Successful 🚀");

      }else{

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("Account Created 🔥");

      }

    }catch(error){

      alert(error.message);

    }

  }

  async function handleLogout(){

    await signOut(auth);

    alert("Logged Out");

  }

  if(user){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white p-6">

        {/* NAVBAR */}

        <nav className="flex justify-between items-center mb-10">

          <h1 className="text-3xl font-bold">

            Exam <span className="text-purple-500">
              Cracker
            </span>

          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-5 py-2 rounded-xl"
          >

            Logout

          </button>

        </nav>

        {/* HERO */}

        <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-4xl font-bold mb-4">

            Welcome Back 👋

          </h2>

          <p className="text-gray-400 text-lg">

            {user.email}

          </p>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <Link href="/mock-test">

            <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 hover:border-purple-500 transition cursor-pointer">

              <h3 className="text-2xl font-semibold mb-3">
                📘 Mock Tests
              </h3>

              <p className="text-gray-400">
                Practice full syllabus tests.
              </p>

            </div>

          </Link>

          <Link href="/rank-predictor">

            <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800 hover:border-purple-500 transition cursor-pointer">

              <h3 className="text-2xl font-semibold mb-3">
                📈 Rank Predictor
              </h3>

              <p className="text-gray-400">
                Predict your expected rank.
              </p>

            </div>

          </Link>

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-800">

            <h3 className="text-2xl font-semibold mb-3">
              🔥 PYQs
            </h3>

            <p className="text-gray-400">
              Coming Soon 🚀
            </p>

          </div>

        </div>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-[#0b1120] flex justify-center items-center px-6">

      <div className="w-full max-w-md bg-[#111827] p-8 rounded-3xl border border-gray-800">

        <h1 className="text-4xl font-bold text-center mb-2">

          Exam <span className="text-purple-500">
            Cracker
          </span>

        </h1>

        <p className="text-center text-gray-400 mb-8">

          {isLogin ? "Login To Continue" : "Create Your Account"}

        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 rounded-2xl bg-[#1e293b] mb-4 outline-none"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 rounded-2xl bg-[#1e293b] mb-6 outline-none"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleAuth}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-lg hover:scale-105 transition"
        >

          {isLogin ? "Login" : "Sign Up"}

        </button>

        <p
          className="text-center mt-6 text-gray-400 cursor-pointer"
          onClick={()=>setIsLogin(!isLogin)}
        >

          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"
          }

        </p>

      </div>

    </main>

  );

}