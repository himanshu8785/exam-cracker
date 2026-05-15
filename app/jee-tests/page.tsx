"use client";

import Link from "next/link";

export default function JEETestsPage(){

  const categories = [

    {
      title:"Test Series",
      desc:"Chapterwise practice tests for JEE 😎",
      icon:"⚡",
      href:"/jee-tests/test-series"
    },

    {
      title:"Subjectwise Test Series",
      desc:"Full Physics, Chemistry & Maths tests 🚀",
      icon:"📚",
      href:"/jee-tests/subjectwise"
    },

    {
      title:"Full Syllabus Test Series",
      desc:"Real JEE full syllabus mock exams 🔥",
      icon:"🏆",
      href:"/jee-tests/full-syllabus"
    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-10 pb-32">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="text-center mb-16">

          <div className="inline-block px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm md:text-base mb-6">

            🚀 India’s Smartest JEE Mock Platform

          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6">

            JEE Mock Tests 😎🔥

          </h1>

          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">

            Practice chapterwise,
            subjectwise and full syllabus tests
            like real toppers 🚀

          </p>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {categories.map((item,index)=>(

            <Link
              key={index}
              href={item.href}
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 md:p-10 hover:border-purple-500/50 active:scale-[0.98] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">

                <div className="text-6xl md:text-7xl mb-8 group-hover:scale-110 transition duration-300">

                  {item.icon}

                </div>

                <h2 className="text-2xl md:text-4xl font-black mb-5">

                  {item.title}

                </h2>

                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">

                  {item.desc}

                </p>

                <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-sm md:text-lg">

                  Open Tests 🚀

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );

}