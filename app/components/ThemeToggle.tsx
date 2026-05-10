"use client";

import { useEffect,useState } from "react";

export default function ThemeToggle() {

  const [dark,setDark] =
  useState(true);

  useEffect(()=>{

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "light"){

      document.documentElement.classList.remove("dark");

      setDark(false);

    }

    else{

      document.documentElement.classList.add("dark");

      setDark(true);

    }

  },[]);

  function toggleTheme(){

    if(dark){

      document.documentElement.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

      setDark(false);

    }

    else{

      document.documentElement.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

      setDark(true);

    }

  }

  return (

    <button
      onClick={toggleTheme}
      className="px-5 py-3 rounded-2xl bg-[#1e293b] border border-gray-700 text-white"
    >

      {dark
        ? "🌙 Dark"
        : "☀️ Light"
      }

    </button>

  );

}