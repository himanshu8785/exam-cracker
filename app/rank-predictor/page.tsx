"use client";

import { useState } from "react";

export default function RankPredictorPage(){

  const [exam,setExam] =
  useState("JEE");

  const [marks,setMarks] =
  useState("");

  const [result,setResult] =
  useState<any>(null);

  function predictRank(){

    const score =
    parseInt(marks);

    if(!score){

      return;

    }

    /* JEE */

    if(exam === "JEE"){

      let percentile = 0;
      let rank = 0;
      let college = "";

      if(score >= 280){

        percentile = 99.9;
        rank = 500;
        college = "IIT Bombay";

      }

      else if(score >= 240){

        percentile = 99.5;
        rank = 2500;
        college = "IIT Delhi";

      }

      else if(score >= 200){

        percentile = 98.7;
        rank = 8000;
        college = "NIT Trichy";

      }

      else if(score >= 150){

        percentile = 96;
        rank = 25000;
        college = "IIIT Hyderabad";

      }

      else{

        percentile = 85;
        rank = 80000;
        college = "Good Private College";

      }

      setResult({

        percentile,
        rank,
        college

      });

    }

    /* NEET */

    else{

      let percentile = 0;
      let rank = 0;
      let college = "";

      if(score >= 680){

        percentile = 99.9;
        rank = 100;
        college = "AIIMS Delhi";

      }

      else if(score >= 650){

        percentile = 99;
        rank = 2500;
        college = "Top Government Medical College";

      }

      else if(score >= 600){

        percentile = 97;
        rank = 12000;
        college = "Government Medical College";

      }

      else if(score >= 500){

        percentile = 92;
        rank = 50000;
        college = "Semi Government College";

      }

      else{

        percentile = 80;
        rank = 120000;
        college = "Private Medical College";

      }

      setResult({

        percentile,
        rank,
        college

      });

    }

  }

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-8">

          📊 Smart Rank Predictor

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Predict Your
          {" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">

            Rank

          </span>

          <br />

          Instantly 🚀

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Predict your percentile,
          AIR and expected college
          for JEE & NEET 😎🔥

        </p>

      </section>

      {/* PREDICTOR */}

      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[45px] p-12">

          {/* TABS */}

          <div className="flex gap-6 mb-10">

            <button

              onClick={()=>setExam("JEE")}

              className={`flex-1 py-5 rounded-2xl text-2xl font-black transition

              ${exam === "JEE"

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

              className={`flex-1 py-5 rounded-2xl text-2xl font-black transition

              ${exam === "NEET"

                ?

                "bg-gradient-to-r from-green-600 to-emerald-500"

                :

                "bg-[#111827]"

              }`}

            >

              🧬 NEET

            </button>

          </div>

          {/* INPUT */}

          <div className="mb-10">

            <label className="block text-2xl font-bold mb-5">

              Enter Your Expected Marks 😎🔥

            </label>

            <input

              type="number"

              placeholder={

                exam === "JEE"

                ?

                "Enter marks out of 300"

                :

                "Enter marks out of 720"

              }

              value={marks}

              onChange={(e)=>setMarks(e.target.value)}

              className="w-full bg-[#111827] border border-white/10 rounded-3xl px-8 py-6 text-2xl outline-none"

            />

          </div>

          {/* BUTTON */}

          <button

            onClick={predictRank}

            className={`w-full py-6 rounded-3xl text-2xl font-black

            ${exam === "JEE"

              ?

              "bg-gradient-to-r from-purple-600 to-blue-600"

              :

              "bg-gradient-to-r from-green-600 to-emerald-500"

            }`}

          >

            Predict Rank 🚀

          </button>

        </div>

      </section>

      {/* RESULT */}

      {

        result && (

          <section className="max-w-6xl mx-auto px-6 pb-24">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* PERCENTILE */}

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

                <div className="text-6xl mb-6">

                  🎯

                </div>

                <h2 className="text-5xl font-black text-blue-400 mb-4">

                  {result.percentile}

                </h2>

                <p className="text-xl text-gray-400">

                  Percentile

                </p>

              </div>

              {/* RANK */}

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

                <div className="text-6xl mb-6">

                  🏆

                </div>

                <h2 className="text-5xl font-black text-purple-400 mb-4">

                  AIR {result.rank}

                </h2>

                <p className="text-xl text-gray-400">

                  Predicted Rank

                </p>

              </div>

              {/* COLLEGE */}

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

                <div className="text-6xl mb-6">

                  🏫

                </div>

                <h2 className="text-4xl font-black text-green-400 mb-4 leading-tight">

                  {result.college}

                </h2>

                <p className="text-xl text-gray-400">

                  Expected College

                </p>

              </div>

            </div>

          </section>

        )

      }

      {/* PREMIUM CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45px] p-12 text-center">

          <div className="text-8xl mb-8">

            💎

          </div>

          <h2 className="text-6xl font-black mb-8">

            Unlock Advanced Predictions

          </h2>

          <p className="text-2xl text-white/90 mb-10 leading-relaxed">

            Get detailed college prediction,
            branch prediction,
            category cutoffs and AI insights 😎🔥

          </p>

          <a
            href="/pricing"
            className="inline-block px-12 py-5 rounded-3xl bg-black text-2xl font-black"
          >

            Upgrade to PRO 🚀

          </a>

        </div>

      </section>

    </main>

  );

}