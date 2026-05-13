"use client";

import { useEffect,useState } from "react";

import { useRouter } from "next/navigation";

import {

  onAuthStateChanged

} from "firebase/auth";

import {

  auth

} from "../../firebase";

export default function AdminLayout({

  children

}:{

  children:React.ReactNode

}){

  const router =
  useRouter();

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    const unsubscribe =
    onAuthStateChanged(

      auth,

      (user)=>{

        /* NOT LOGGED IN */

        if(!user){

          router.push("/");

          return;

        }

        /* ONLY YOUR EMAIL */

        if(

          user.email !==

          "himanshuwork9988@gmail.com"

        ){

          router.push("/");

          return;

        }

        setLoading(false);

      }

    );

    return()=>unsubscribe();

  },[]);

  if(loading){

    return(

      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center text-4xl font-black">

        Checking Admin Access 😎🔥

      </main>

    );

  }

  return children;

}