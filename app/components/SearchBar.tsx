"use client";

import { useState } from "react";

export default function SearchBar() {

  const [search,setSearch] =
  useState("");

  const suggestions = [

    "Physics",

    "Chemistry",

    "Mathematics",

    "Biology",

    "Mock Test",

    "JEE",

    "NEET"

  ];

  function handleSearch(
    e:any
  ){

    e.preventDefault();

    alert(

      `Searching for: ${search}`

    );

  }

  return (

    <div className="w-full">

      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4"
      >

        <input
          type="text"
          placeholder="Search notes, tests, PYQs..."
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
          className="flex-1 bg-[#1e293b] text-white rounded-2xl px-6 py-4 outline-none"
        />

        <button
          type="submit"
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
        >

          Search 🚀

        </button>

      </form>

      <div className="flex flex-wrap gap-3 mt-6">

        {suggestions.map((item,index)=>(

          <button
            key={index}
            onClick={()=>
              setSearch(item)
            }
            className="bg-[#111827] border border-gray-700 rounded-2xl px-4 py-2 text-sm hover:border-purple-500 transition"
          >

            {item}

          </button>

        ))}

      </div>

    </div>

  );

}