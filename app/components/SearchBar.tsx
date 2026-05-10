"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function SearchBar() {

  const router = useRouter();

  const [query,setQuery] =
  useState("");

  const pages = [

    {
      name:"Mock Tests",
      link:"/mock-test"
    },

    {
      name:"Rank Predictor",
      link:"/rank-predictor"
    },

    {
      name:"AI Doubt Solver",
      link:"/ai-doubt-solver"
    },

    {
      name:"Leaderboard",
      link:"/leaderboard"
    },

    {
      name:"Premium",
      link:"/premium"
    },

    {
      name:"History",
      link:"/history"
    },

    {
      name:"Subject Tests",
      link:"/subject-tests"
    },

    {
      name:"Analytics",
      link:"/analytics"
    }

  ];

  function handleSearch(e){

    e.preventDefault();

    const result =
    pages.find((page)=>

      page.name
      .toLowerCase()
      .includes(
        query.toLowerCase()
      )

    );

    if(result){

      router.push(result.link);

    }

    else{

      alert("No matching page found 🚀");

    }

  }

  return (

    <form
      onSubmit={handleSearch}
      className="flex items-center gap-3"
    >

      <input
        type="text"
        placeholder="Search features..."
        value={query}
        onChange={(e)=>
          setQuery(e.target.value)
        }
        className="bg-[#1e293b] border border-gray-700 rounded-2xl px-5 py-3 outline-none text-white w-56"
      />

      <button
        type="submit"
        className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600"
      >

        🔍

      </button>

    </form>

  );

}