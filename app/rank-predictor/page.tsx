"use client";

import { useState } from "react";

export default function RankPredictorPage() {

  const [score,setScore] = useState("");

  const [category,setCategory] =
  useState("General");

  const [result,setResult] = useState(null);

  function predictRank(){

    const marks = Number(score);

    if(!marks && marks !== 0){

      alert("Enter valid marks");

      return;

    }

    let percentile = 0;

    let rank = 0;

    // Percentile Prediction

    if(marks >= 290){

      percentile = 99.95;
      rank = 500;

    }

    else if(marks >= 250){

      percentile = 99.5;
      rank = 4000;

    }

    else if(marks >= 200){

      percentile = 98;
      rank = 18000;

    }

    else if(marks >= 150){

      percentile = 95;
      rank = 40000;

    }

    else if(marks >= 100){

      percentile = 85;
      rank = 90000;

    }

    else if(marks >= 50){

      percentile = 70;
      rank = 150000;

    }

    else{

      percentile = 50;
      rank = 250000;

    }

    // Category Adjustment

    if(category === "OBC"){

      rank = Math.floor(rank * 0.9);

    }

    else if(category === "SC"){

      rank = Math.floor(rank * 0.7);

    }

    else if(category === "ST"){

      rank = Math.floor(rank * 0.5);

    }

    setResult({

      percentile,
      rank

    });

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">

          📈 <span className="text-purple-500">
            Rank Predictor
          </span>

        </h1>

        <p className="text-center text-gray-400 text-lg mb-12">

          Predict your JEE Main rank instantly 🚀

        </p>

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10">

          <div className="space-y-6">

            <div>

              <label className="block mb-3 text-lg text-gray-400">

                Enter Expected Score

              </label>

              <input
                type="number"
                placeholder="Enter marks out of 300"
                value={score}
                onChange={(e)=>setScore(e.target.value)}
                className="w-full p-5 rounded-2xl bg-[#1e293b] outline-none text-lg"
              />

            </div>

            <div>

              <label className="block mb-3 text-lg text-gray-400">

                Select Category

              </label>

              <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                className="w-full p-5 rounded-2xl bg-[#1e293b] outline-none text-lg"
              >

                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>

              </select>

            </div>

            <button
              onClick={predictRank}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
            >

              Predict Rank

            </button>

          </div>

        </div>

        {result && (

          <div className="mt-10 bg-[#111827] border border-purple-500 rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8 text-center">

              🎯 Prediction Result

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-[#1e293b] p-8 rounded-3xl text-center">

                <h3 className="text-2xl text-gray-400 mb-4">

                  Expected Percentile

                </h3>

                <p className="text-5xl font-bold text-purple-500">

                  {result.percentile}

                </p>

              </div>

              <div className="bg-[#1e293b] p-8 rounded-3xl text-center">

                <h3 className="text-2xl text-gray-400 mb-4">

                  Expected Rank

                </h3>

                <p className="text-5xl font-bold text-purple-500">

                  AIR {result.rank}

                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </main>

  );

}