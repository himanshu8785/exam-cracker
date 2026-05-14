"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {

  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword

} from "firebase/auth";

import { auth } from "../../firebase";

export default function LoginPage(){

  const router =
  useRouter();

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  const [loading,setLoading] =
  useState(false);

  const [error,setError] =
  useState("");

  async function loginWithGoogle(){

    try{

      setLoading(true);

      setError("");

      const provider =
      new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

      router.push("/profile");

    }

    catch(error:any){

      setError(
        error.message
      );

    }

    setLoading(false);

  }

  async function loginWithEmail(){

    try{

      setLoading(true);

      setError("");

      await signInWithEmailAndPassword(

        auth,
        email,
        password

      );

      router.push("/profile");

    }

    catch(error:any){

      setError(
        "Invalid Email or Password"
      );

    }

    setLoading(false);

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden flex justify-center items-center px-6 py-20">

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-xl">

        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 md:p-14">

          <div className="text-center mb-10">

            <div className="text-7xl mb-6">

              🚀

            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-4">

              Welcome Back

            </h1>

            <p className="text-gray-400 text-lg">

              Login to continue your JEE & NEET preparation 😎🔥

            </p>

          </div>

          {/* ERROR */}

          {

            error && (

              <div className="mb-6 bg-red-500/20 border border-red-500/30 text-red-300 rounded-2xl p-4 text-center">

                {error}

              </div>

            )

          }

          {/* EMAIL */}

          <div className="mb-6">

            <label className="block mb-3 text-lg font-bold">

              Email

            </label>

            <input

              type="email"

              placeholder="Enter your email"

              value={email}

              onChange={(e)=>
                setEmail(e.target.value)
              }

              className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 outline-none"

            />

          </div>

          {/* PASSWORD */}

          <div className="mb-8">

            <label className="block mb-3 text-lg font-bold">

              Password

            </label>

            <input

              type="password"

              placeholder="Enter your password"

              value={password}

              onChange={(e)=>
                setPassword(e.target.value)
              }

              className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 outline-none"

            />

          </div>

          {/* LOGIN BUTTON */}

          <button

            onClick={loginWithEmail}

            disabled={loading}

            className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-xl font-black mb-6"

          >

            {

              loading

              ?

              "Please Wait..."

              :

              "Login 🚀"

            }

          </button>

          {/* GOOGLE */}

          <button

            onClick={loginWithGoogle}

            disabled={loading}

            className="w-full py-5 rounded-2xl bg-white text-black text-xl font-black mb-8"

          >

            Continue With Google 🔥

          </button>

          {/* SIGNUP */}

          <div className="text-center">

            <p className="text-gray-400 text-lg">

              Don’t have an account?

              {" "}

              <Link
                href="/signup"
                className="text-purple-400 font-bold"
              >

                Create Account

              </Link>

            </p>

          </div>

        </div>

      </div>

    </main>

  );

}