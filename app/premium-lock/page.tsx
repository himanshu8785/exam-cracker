"use client";

import { useEffect,useState }
from "react";

import {
  auth,
  db
} from "../../firebase";

import {
  doc,
  getDoc
} from "firebase/firestore";

import Link from "next/link";

export default function PremiumLockPage() {

  const [loading,setLoading] =
  useState(true);

  const [premium,setPremium] =
  useState(false);

  useEffect(()=>{

    async function checkPremium(){

      try{

        const user =
        auth.currentUser;

        if(!user){

          setLoading(false);

          return;

        }

        const docRef =
        doc(db,"users",user.uid);

        const docSnap =
        await getDoc(docRef);

        if(
          docSnap.exists() &&
          docSnap.data().premium
        ){

          setPremium(true);

        }

      }

      catch(error){

        console.log(error);

      }

      setLoading(false);

    }

    checkPremium();

  },[]);

  if(loading){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center">

        <h1 className="text-4xl font-bold">

          Checking Access...
        </h1>

      </main>

    );

  }

  if(!premium){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white p-6 flex justify-center items-center">

        <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-12 max-w-2xl w-full text-center">

          <div className="text-8xl mb-8">

            🔒

          </div>

          <h1 className="text-5xl font-black mb-6">

            Premium Feature
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed mb-10">

            Buy premium plan to access
            this feature 😎🔥

          </p>

          <Link
            href="/pricing"
            className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
          >

            Upgrade Now 🚀

          </Link>

        </div>

      </main>

    );

  }

  return(

    <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center">

      <div className="text-center">

        <div className="text-8xl mb-8">

          🎉

        </div>

        <h1 className="text-6xl font-black text-purple-500 mb-6">

          Premium Access Granted
        </h1>

        <p className="text-gray-400 text-2xl">

          Welcome to Elite Features 😎🔥

        </p>

      </div>

    </main>

  );

}