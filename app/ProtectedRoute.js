"use client";

import {

  useEffect,
  useState

} from "react";

import {

  useRouter

} from "next/navigation";

import {

  onAuthStateChanged

} from "firebase/auth";

import { auth }
from "../firebase";

export default function ProtectedRoute({

  children

}){

  const router =
  useRouter();

  const [loading,setLoading] =
  useState(true);

  const [authorized,setAuthorized] =
  useState(false);

  useEffect(()=>{

    const unsubscribe =

    onAuthStateChanged(

      auth,

      (user)=>{

        if(user){

          setAuthorized(true);

        }

        else{

          router.push("/login");

        }

        setLoading(false);

      }

    );

    return()=>unsubscribe();

  },[router]);

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex justify-center items-center">

        <h1 className="text-3xl font-black">

          Checking Login 😎🔥

        </h1>

      </main>

    );

  }

  if(!authorized){

    return null;

  }

  return children;

}