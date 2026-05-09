"use client";

import { useState } from "react";

export default function RankPredictor() {

  const [percentile,setPercentile] = useState("");

  const [rank,setRank] = useState("");

  function predictRank(){

    const p = parseFloat(percentile);

    if(isNaN(p)){

      setRank("Please enter valid percentile");

      return;

    }

    if(p >= 99.9){

      setRank("🔥 Expected Rank: Under 1,000");

    }

    else if(p >= 99.5){

      setRank("🚀 Expected Rank: Under 8,000");

    }

    else if(p >= 99){

      setRank("🎯 Expected Rank: Under 15,000");

    }

    else if(p >= 97){

      setRank("📘 Expected Rank: Around 30,000");

    }

    else if(p >= 95){

      setRank("💪 Expected Rank: Around 50,000");

    }

    else if(p >= 90){

      setRank("📈 Expected Rank: Around 1,00,000");

    }

    else{

      setRank("Keep Practicing Daily 🔥");

    }

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white flex justify-center items-center px-6">

      <div className="w-full max-w-2xl bg-[#111827] p-10 rounded-3xl border border-gray-800">

        <h1 className="text-5xl font-bold text-center mb-4">

          Rank <span className="text-purple-500">
            Predictor
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-10">

          Predict your expected JEE rank instantly 🚀

        </p>

        <input
          type="number"
          placeholder="Enter Your Percentile"
          value={percentile}
          onChange={(e)=>setPercentile(e.target.value)}
          className="w-full p-5 rounded-2xl bg-[#1e293b] outline-none text-lg mb-6"
        />

        <button
          onClick={predictRank}
          className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold hover:scale-105 transition"
        >

          Predict Rank

        </button>

        {rank && (

          <div className="mt-10 bg-[#1e293b] p-6 rounded-2xl border border-gray-700">

            <h2 className="text-3xl font-bold text-center">

              {rank}

            </h2>

          </div>

        )}

      </div>

    </main>

  );

}