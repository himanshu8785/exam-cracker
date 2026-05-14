"use client";

import Link from "next/link";

import {
  useEffect,
  useState
} from "react";

import { usePathname }
from "next/navigation";

import {
  onAuthStateChanged
} from "firebase/auth";

import { auth }
from "../../firebase";

export default function BottomNav(){

  const pathname =
  usePathname();

  const [loggedIn,setLoggedIn] =
  useState(false);

  useEffect(()=>{

    const unsubscribe =

    onAuthStateChanged(

      auth,

      (user)=>{

        setLoggedIn(!!user);

      }

    );

    return()=>unsubscribe();

  },[]);

  const navItems = [

    {
      label:"Home",
      href:"/",
      icon:"🏠"
    },

    {
      label:"JEE",
      href:
      loggedIn
      ?
      "/jee-tests"
      :
      "/login",

      icon:"⚡"
    },

    {
      label:"NEET",
      href:
      loggedIn
      ?
      "/neet-tests"
      :
      "/login",

      icon:"🧬"
    },

    {
      label:"AI",
      href:
      loggedIn
      ?
      "https://gemini.google.com/"
      :
      "/login",

      icon:"🤖"
    },

    {
      label:"Premium",
      href:
      loggedIn
      ?
      "/pricing"
      :
      "/login",

      icon:"💎"
    },

    {

      label:
      loggedIn
      ?
      "Profile"
      :
      "Login",

      href:
      loggedIn
      ?
      "/profile"
      :
      "/login",

      icon:"👤"

    }

  ];

  return(

    <div className="fixed bottom-0 left-0 w-full z-50 px-3 pb-3">

      <div className="max-w-7xl mx-auto">

        <div className="bg-[#0B1120]/95 backdrop-blur-2xl border border-white/10 rounded-[30px] px-2 py-3 shadow-2xl">

          <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide">

            {navItems.map((item,index)=>(

              item.href.startsWith("http")

              ?

              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-w-[72px] flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-2xl transition-all duration-300 active:scale-95

                ${
                  pathname === item.href

                  ?

                  "bg-gradient-to-r from-purple-600 to-blue-600 text-white"

                  :

                  "text-gray-400 hover:text-white hover:bg-white/5"

                }`}
              >

                <div className="text-[22px]">

                  {item.icon}

                </div>

                <p className="text-[11px] font-bold whitespace-nowrap">

                  {item.label}

                </p>

              </a>

              :

              <Link
                key={index}
                href={item.href}
                className={`min-w-[72px] flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-2xl transition-all duration-300 active:scale-95

                ${
                  pathname === item.href

                  ?

                  "bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-105"

                  :

                  "text-gray-400 hover:text-white hover:bg-white/5"

                }`}
              >

                <div className="text-[22px]">

                  {item.icon}

                </div>

                <p className="text-[11px] font-bold whitespace-nowrap">

                  {item.label}

                </p>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}