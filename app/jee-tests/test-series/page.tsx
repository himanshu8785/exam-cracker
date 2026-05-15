"use client";

import Link from "next/link";

export default function JEETestSeriesPage(){

  const tests = [

    {
      title:"Physics Mock Test",
      chapter:"Laws of Motion",
      questions:"30 Questions",
      time:"45 Min",
      icon:"⚡"
    },

    {
      title:"Chemistry Mock Test",
      chapter:"Organic Chemistry",
      questions:"30 Questions",
      time:"45 Min",
      icon:"🧪"
    },

    {
      title:"Maths Mock Test",
      chapter:"Calculus",
      questions:"30 Questions",
      time:"45 Min",
      icon:"📘"
    },

    {
      title:"Physics Mock Test",
      chapter:"Thermodynamics",
      questions:"30 Questions",
      time:"45 Min",
      icon:"🔥"
    },

    {
      title:"Chemistry Mock Test",
      chapter:"Chemical Bonding",
      questions:"30 Questions",
      time:"45 Min",
      icon:"⚗️"
    },

    {
      title:"Maths Mock Test",
      chapter:"Coordinate Geometry",
      questions:"30 Questions",
      time:"45 Min",
      icon:"📐"
    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-10 pb-32">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="text-center mb-16">

          <div className="inline-block px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm md:text-base mb-6">

            🚀 JEE Chapterwise Practice

          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6">

            JEE Test Series 😎🔥

          </h1>

          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">

            Practice chapterwise tests
            with real JEE level questions 🚀

          </p>

        </div>

        {/* TEST CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {tests.map((test,index)=>(

            <div
              key={index}
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 md:p-8 hover:border-purple-500/50 active:scale-[0.98] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">

                <div className="text-6xl mb-6">

                  {test.icon}

                </div>

                <h2 className="text-2xl font-black mb-3">

                  {test.title}

                </h2>

                <p className="text-purple-400 font-bold mb-5">

                  {test.chapter}

                </p>

                <div className="flex items-center justify-between text-gray-400 text-sm mb-8">

                  <span>

                    📝 {test.questions}

                  </span>

                  <span>

                    ⏱ {test.time}

                  </span>

                </div>

                <Link
                  href="/jee-tests/mock-test"
                  className="inline-block w-full text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-sm md:text-lg font-bold active:scale-95 transition-all"
                >

                  Start Test 🚀

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}