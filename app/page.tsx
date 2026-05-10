"use client";

import Link from "next/link";

import { useEffect,useState } from "react";

import Footer from "./components/Footer";

import SearchBar from "./components/SearchBar";

import ThemeToggle from "./components/ThemeToggle";

import {
  auth
} from "../firebase";

import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

import BottomNav from "./components/BottomNav";

export default function HomePage() {

  const [user,setUser] = useState(null);

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [login,setLogin] = useState(true);

  useEffect(()=>{

    const unsubscribe =
    onAuthStateChanged(auth,(currentUser)=>{

      setUser(currentUser);

    });

    return ()=>unsubscribe();

  },[]);

  async function handleAuth(){

    try{

      if(login){

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("Login Successful 🚀");

      }

      else{

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("Account Created 🔥");

      }

    }

    catch(error){

      alert(error.message);

    }

  }

  async function handleGoogleLogin(){

    try{

      const provider =
      new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

      alert("Google Login Successful 🚀");

    }

    catch(error){

      alert(error.message);

    }

  }

  async function logout(){

    await signOut(auth);

    alert("Logged Out");

  }

  if(!user){

    return(

      <main className="min-h-screen bg-[#0b1120] flex justify-center items-center px-6 text-white">

        <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-3xl p-8">

          <h1 className="text-5xl font-bold text-center mb-3">

            Exam <span className="text-purple-500">
              Cracker
            </span>

          </h1>

          <p className="text-center text-gray-400 mb-8">

            India’s Modern JEE / NEET Platform 🚀

          </p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-[#1e293b] outline-none mb-4"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl bg-[#1e293b] outline-none mb-6"
          />

          <button
            onClick={handleAuth}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-lg"
          >

            {login
              ? "Login"
              : "Create Account"
            }

          </button>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-lg mt-4"
          >

            Continue with Google

          </button>

          <p
            onClick={()=>setLogin(!login)}
            className="text-center text-gray-400 mt-6 cursor-pointer"
          >

            {login
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"
            }

          </p>

        </div>

      </main>

    );

  }

  const features = [

    {
      title:"📘 Mock Tests",
      link:"/mock-test"
    },

    {
      title:"📈 Rank Predictor",
      link:"/rank-predictor"
    },

    {
      title:"🤖 AI Doubt Solver",
      link:"/ai-doubt-solver"
    },

    {
      title:"🏆 Leaderboard",
      link:"/leaderboard"
    },

    {
      title:"📚 Study Material",
      link:"/study-material"
    },

    {
      title:"🎯 Daily Quiz",
      link:"/daily-quiz"
    },

    {
      title:"👤 Profile",
      link:"/profile"
    },

    {
      title:"📊 Analytics",
      link:"/analytics"
    },

    {
      title:"📅 Study Planner",
      link:"/study-planner"
    },

    {
      title:"💬 Chat Room",
      link:"/chat-room"
    },

    {
      title:"🧾 Admin Panel",
      link:"/admin-panel"
    },

    {
      title:"💳 Premium",
      link:"/premium"
    },

    {
      title:"🔔 Notifications",
      link:"/notifications"
    },

    {
      title:"📊 History",
      link:"/history"
    },

    {
      title:"🎯 Subject Tests",
      link:"/subject-tests"
    }

  ];

  return(

    <main className="min-h-screen bg-[#0b1120] text-white pb-24">

      <nav className="border-b border-gray-800 bg-[#111827] sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold">

            Exam <span className="text-purple-500">
              Cracker
            </span>

          </h1>

          <div className="flex items-center gap-4">

            <p className="hidden md:block text-gray-400">

              {user.email}

            </p>

            <button
              onClick={logout}
              className="px-5 py-2 rounded-xl bg-red-500"
            >

              Logout

            </button>

          </div>

        </div>

      </nav>

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>

            <div className="inline-block px-5 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-purple-400 mb-6">

              🚀 India’s Smartest Exam Platform

            </div>

            <h1 className="text-6xl font-black leading-tight mb-6">

              Crack <span className="text-purple-500">
                JEE & NEET
              </span>

              <br />

              With AI + Analytics

            </h1>

            <p className="text-gray-400 text-xl leading-relaxed mb-8 max-w-2xl">

              Practice mock tests, predict ranks,
              solve doubts with AI, track progress
              and dominate competitive exams 🚀

            </p>

            <div className="flex flex-wrap gap-4">
              <SearchBar />
              <ThemeToggle />

              <Link href="/mock-test">

                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold">

                  Start Mock Test

                </button>

              </Link>

              <Link href="/premium">

                <button className="px-8 py-4 rounded-2xl border border-gray-700 text-lg font-semibold">

                  View Premium

                </button>

              </Link>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-purple-600 blur-[120px] opacity-20 rounded-full" />

            <div className="relative bg-[#111827] border border-gray-800 rounded-[40px] p-10">

              <div className="space-y-6">

                <div className="bg-[#1e293b] rounded-3xl p-6 border border-gray-700">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold">

                        Mock Test Score

                      </h2>

                      <p className="text-gray-400 mt-2">

                        Latest Performance

                      </p>

                    </div>

                    <div className="text-5xl font-black text-purple-500">

                      286

                    </div>

                  </div>

                </div>

                <div className="bg-[#1e293b] rounded-3xl p-6 border border-gray-700">

                  <div className="flex justify-between items-center">

                    <div>

                      <h2 className="text-2xl font-bold">

                        Predicted Rank

                      </h2>

                      <p className="text-gray-400 mt-2">

                        AI Prediction

                      </p>

                    </div>

                    <div className="text-5xl font-black text-blue-500">

                      AIR 512

                    </div>

                  </div>

                </div>

                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8">

                  <h2 className="text-3xl font-bold mb-4">

                    🔥 Premium Access

                  </h2>

                  <p className="text-lg opacity-90 mb-6">

                    Unlock advanced analytics,
                    unlimited tests and premium AI tools.

                  </p>

                  <Link href="/premium">

                    <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold">

                      Upgrade Now

                    </button>

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-5xl font-bold mb-3">

              Explore Features 🚀

            </h2>

            <p className="text-gray-400 text-lg">

              Everything you need to crack exams

            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature,index)=>(

            <Link
              href={feature.link}
              key={index}
            >

              <div className="bg-[#111827] border border-gray-800 hover:border-purple-500 transition rounded-3xl p-8 cursor-pointer hover:scale-[1.02]">

                <h3 className="text-2xl font-bold">

                  {feature.title}

                </h3>

                <p className="text-gray-400 mt-3">

                  Open Feature →

                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold mb-4">

            ❤️ Loved By Students

          </h2>

          <p className="text-gray-400 text-lg">

            Thousands of aspirants trust Exam Cracker 🚀

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <div className="text-5xl mb-5">

              😍

            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">

              Exam Cracker helped me improve my mock test scores dramatically. The analytics are amazing.

            </p>

            <h3 className="text-2xl font-bold">

              Aarav Sharma

            </h3>

            <p className="text-gray-400 mt-2">

              JEE Aspirant

            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <div className="text-5xl mb-5">

              🚀

            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">

              The AI doubt solver and rank predictor make preparation super easy and fun.

            </p>

            <h3 className="text-2xl font-bold">

              Priya Verma

            </h3>

            <p className="text-gray-400 mt-2">

              NEET Student

            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <div className="text-5xl mb-5">

              🔥

            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">

              Best platform for mock tests and tracking daily progress. UI feels premium.

            </p>

            <h3 className="text-2xl font-bold">

              Rohan Gupta

            </h3>

            <p className="text-gray-400 mt-2">

              JEE Advanced Aspirant

            </p>

          </div>

        </div>

      </section>

      <Footer />

      <BottomNav />

    </main>

  );

}