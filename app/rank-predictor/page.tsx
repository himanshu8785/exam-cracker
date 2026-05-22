"use client";

import { useState } from "react";

export default function RankPredictorPage(){

  const [exam,setExam] =
  useState("JEE");

  const [marks,setMarks] =
  useState("");

  const [category,setCategory] =
  useState("General");

  const [difficulty,setDifficulty] =
  useState("Medium");

  const [result,setResult] =
  useState<any>(null);

  function predictRank(){

    const score =
    parseInt(marks);

    if(!score){

      return;

    }

    let percentile = 0;
    let rank = 0;
    let college = "";
    let branch = "";
    let chance = "";
    let analysis = "";

    /* JEE */

    if(exam === "JEE"){

      if(score >= 280){

        percentile = 99.9;
        rank = 500;
        college = "IIT Bombay";
        branch = "Computer Science";
        chance = "95%";
        analysis = "Excellent performance 😎🔥";

      }

      else if(score >= 240){

        percentile = 99.5;
        rank = 2500;
        college = "IIT Delhi";
        branch = "Electrical";
        chance = "90%";
        analysis = "Very strong score 🚀";

      }

      else if(score >= 200){

        percentile = 98.7;
        rank = 8000;
        college = "NIT Trichy";
        branch = "ECE";
        chance = "85%";
        analysis = "Great chances in top NITs 😎";

      }

      else if(score >= 150){

        percentile = 96;
        rank = 25000;
        college = "IIIT Hyderabad";
        branch = "IT";
        chance = "70%";
        analysis = "Decent percentile 👍";

      }

      else{

        percentile = 85;
        rank = 80000;
        college = "Good Private College";
        branch = "Core Branch";
        chance = "50%";
        analysis = "Keep improving 🔥";

      }

    }

    /* NEET */

    else{

      if(score >= 680){

        percentile = 99.9;
        rank = 100;
        college = "AIIMS Delhi";
        branch = "MBBS";
        chance = "99%";
        analysis = "Outstanding score 😎🔥";

      }

      else if(score >= 650){

        percentile = 99;
        rank = 2500;
        college = "Top Government Medical College";
        branch = "MBBS";
        chance = "95%";
        analysis = "Excellent medical rank 🚀";

      }

      else if(score >= 600){

        percentile = 97;
        rank = 12000;
        college = "Government Medical College";
        branch = "MBBS";
        chance = "80%";
        analysis = "Strong admission chances 😎";

      }

      else if(score >= 500){

        percentile = 92;
        rank = 50000;
        college = "Semi Government College";
        branch = "BDS";
        chance = "60%";
        analysis = "Average competition zone 👍";

      }

      else{

        percentile = 80;
        rank = 120000;
        college = "Private Medical College";
        branch = "Medical";
        chance = "40%";
        analysis = "Need more improvement 🔥";

      }

    }

    /* CATEGORY BOOST */

    if(category !== "General"){

      rank =
      Math.floor(rank * 0.7);

    }

    /* DIFFICULTY BOOST */

    if(difficulty === "Hard"){

      percentile += 0.3;

    }

    setResult({

      percentile,
      rank,
      college,
      branch,
      chance,
      analysis

    });

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-8">

          📊 AI Powered Rank Predictor

        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">

          Predict Your

          <br />

          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">

            AIR Rank 😎🔥

          </span>

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          AI powered JEE & NEET rank predictor with
          percentile, college prediction,
          branch prediction and admission chances 🚀

        </p>

      </section>

      {/* MAIN BOX */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-8 md:p-12">

          {/* EXAM TABS */}

          <div className="flex gap-5 mb-10">

            <button

              onClick={()=>setExam("JEE")}

              className={`flex-1 py-5 rounded-2xl text-xl md:text-2xl font-black transition-all

              ${exam==="JEE"

                ?

                "bg-gradient-to-r from-purple-600 to-blue-600"

                :

                "bg-[#111827]"

              }`}

            >

              ⚡ JEE

            </button>

            <button

              onClick={()=>setExam("NEET")}

              className={`flex-1 py-5 rounded-2xl text-xl md:text-2xl font-black transition-all

              ${exam==="NEET"

                ?

                "bg-gradient-to-r from-green-600 to-emerald-500"

                :

                "bg-[#111827]"

              }`}

            >

              🧬 NEET

            </button>

          </div>

          {/* INPUTS */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {/* MARKS */}

            <div>

              <label className="block text-lg font-bold mb-3">

                Enter Marks 😎🔥

              </label>

              <input

                type="number"

                placeholder={

                  exam==="JEE"

                  ?

                  "Marks out of 300"

                  :

                  "Marks out of 720"

                }

                value={marks}

                onChange={(e)=>setMarks(e.target.value)}

                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 text-xl outline-none"

              />

            </div>

            {/* CATEGORY */}

            <div>

              <label className="block text-lg font-bold mb-3">

                Category 🎯

              </label>

              <select

                value={category}

                onChange={(e)=>setCategory(e.target.value)}

                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 text-xl outline-none"

              >

                <option>General</option>

                <option>OBC</option>

                <option>EWS</option>

                <option>SC</option>

                <option>ST</option>

              </select>

            </div>

            {/* DIFFICULTY */}

            <div>

              <label className="block text-lg font-bold mb-3">

                Shift Difficulty 🚀

              </label>

              <select

                value={difficulty}

                onChange={(e)=>setDifficulty(e.target.value)}

                className="w-full bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 text-xl outline-none"

              >

                <option>Easy</option>

                <option>Medium</option>

                <option>Hard</option>

              </select>

            </div>

          </div>

          {/* BUTTON */}

          <button

            onClick={predictRank}

            className={`w-full py-6 rounded-3xl text-2xl font-black transition-all active:scale-95

            ${exam==="JEE"

              ?

              "bg-gradient-to-r from-purple-600 to-blue-600"

              :

              "bg-gradient-to-r from-green-600 to-emerald-500"

            }`}

          >

            Predict AIR Rank 🚀

          </button>

        </div>

      </section>

      {/* RESULTS */}

      {

        result && (

          <section className="max-w-7xl mx-auto px-6 pb-24">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

              {/* PERCENTILE */}

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 text-center">

                <div className="text-6xl mb-5">

                  🎯

                </div>

                <h2 className="text-5xl font-black text-blue-400 mb-4">

                  {result.percentile}

                </h2>

                <p className="text-gray-400 text-xl">

                  Percentile

                </p>

              </div>

              {/* RANK */}

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 text-center">

                <div className="text-6xl mb-5">

                  🏆

                </div>

                <h2 className="text-5xl font-black text-purple-400 mb-4">

                  AIR {result.rank}

                </h2>

                <p className="text-gray-400 text-xl">

                  Predicted Rank

                </p>

              </div>

              {/* COLLEGE */}

              <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 text-center">

                <div className="text-6xl mb-5">

                  🏫

                </div>

                <h2 className="text-3xl font-black text-green-400 mb-4 leading-tight">

                  {result.college}

                </h2>

                <p className="text-gray-400 text-xl">

                  Expected College

                </p>

              </div>

            </div>

            {/* ADVANCED BOX */}

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-black mb-10">

                AI Analysis 😎🔥

              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-[#111827] rounded-3xl p-8">

                  <div className="text-5xl mb-5">

                    📘

                  </div>

                  <h3 className="text-2xl font-black mb-4">

                    Expected Branch

                  </h3>

                  <p className="text-xl text-blue-400 font-bold">

                    {result.branch}

                  </p>

                </div>

                <div className="bg-[#111827] rounded-3xl p-8">

                  <div className="text-5xl mb-5">

                    📈

                  </div>

                  <h3 className="text-2xl font-black mb-4">

                    Admission Chance

                  </h3>

                  <p className="text-xl text-green-400 font-bold">

                    {result.chance}

                  </p>

                </div>

              </div>

              <div className="mt-8 bg-[#111827] rounded-3xl p-8">

                <div className="text-5xl mb-5">

                  🤖

                </div>

                <h3 className="text-3xl font-black mb-4">

                  AI Recommendation

                </h3>

                <p className="text-xl text-gray-300 leading-relaxed">

                  {result.analysis}

                </p>

              </div>

            </div>

          </section>

        )

      }

      {/* PREMIUM */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-[45px] p-10 md:p-14 text-center">

          <div className="text-8xl mb-8">

            💎

          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8">

            Unlock PRO Prediction 😎🔥

          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">

            Get advanced AI college prediction,
            branch prediction,
            category analysis,
            personalized counselling
            and premium insights 🚀

          </p>

          <a
            href="/pricing"
            className="inline-block px-12 py-5 rounded-3xl bg-black text-2xl font-black active:scale-95 transition-all"
          >

            Upgrade to PRO 🚀

          </a>

        </div>

      </section>

    </main>

  );

}