"use client";

import { useEffect,useState } from "react";

import { useRouter } from "next/navigation";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {

  const [loading,setLoading] = useState(true);

  const router = useRouter();

  useEffect(()=>{

    const unsubscribe =
    onAuthStateChanged(auth,(user)=>{

      if(!user){

        router.push("/");

      }

      setLoading(false);

    });

    return ()=>unsubscribe();

  },[]);

  if(loading){

    return(

      <main className="min-h-screen bg-[#0b1120] flex justify-center items-center text-white">

        <h1 className="text-3xl font-bold">

          Loading...

        </h1>

      </main>

    );

  }

  return children;

}