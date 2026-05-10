"use client";

import { ReactNode,useEffect,useState } from "react";

import { useRouter } from "next/navigation";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";

interface Props {

  children: ReactNode;

}

export default function ProtectedRoute({

  children,

}: Props) {

  const router = useRouter();

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    const unsubscribe =
    onAuthStateChanged(auth,(user)=>{

      if(!user){

        router.push("/");

      }

      else{

        setLoading(false);

      }

    });

    return ()=>unsubscribe();

  },[router]);

  if(loading){

    return(

      <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center">

        <h1 className="text-4xl font-bold">

          Loading...

        </h1>

      </main>

    );

  }

  return <>{children}</>;

}