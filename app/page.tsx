"use client";

import Link from "next/link";

export default function HomePage() {

  const tools = [

    {
      title:"AI Doubt Solver",
      link:"https://gemini.google.com/",
      icon:"🤖",
      desc:"Solve doubts instantly with Gemini AI"
    },

    {
      title:"JEE Test Series",
      link:"/jee-tests",
      icon:"⚡",
      desc:"Unlimited JEE mock tests"
    },

    {
      title:"NEET Test Series",
      link:"/neet-tests",
      icon:"🧬",
      desc:"Unlimited NEET mock tests"
    },

    {
      title:"Rank Predictor",
      link:"/rank-predictor",
      icon:"📊",
      desc:"Predict AIR & percentile"
    },

    {
      title:"Study Material",
      link:"/study-material",
      icon:"📚",
      desc:"Notes, NCERT & PYQs"
    },

    {
      title:"Daily Quiz",
      link:"/daily-quiz",
      icon:"🔥",
      desc:"Daily challenge questions"
    },

    {
      title:"Leaderboard",
      link:"/leaderboard",
      icon:"🏆",
      desc:"Compete with toppers"
    },

    {
      title:"Premium Plans",
      link:"/pricing",
      icon:"💎",
      desc:"Unlock all premium features"
    }

  ];

  const stats = [

    {
      value:"25K+",
      label:"Students"
    },

    {
      value:"10K+",
      label:"PYQs"
    },

    {
      value:"500+",
      label:"Mock Tests"
    },

    {
      value:"99%",
      label:"Success Rate"
    }

  ];

  return (

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-black">

            🚀 Exam Cracker

          </h1>

          <div className="hidden md:flex gap-8 text-lg">

            <Link href="/jee-tests">

              JEE Tests

            </Link>

            <Link href="/neet-tests">

              NEET Tests

            </Link>

            <a
              href="https://gemini.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >

              AI Solver

            </a>

            <Link href="/pricing">

              Premium

            </Link>

            <Link href="/profile">

              Profile

            </Link>

          </div>

        </div>

      </header>

      {/* HERO */}

      <section className="relative max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-16 md:pb-24">

        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/30 blur-[120px] rounded-full"></div>

        <div className="relative z-10 text-center">

          <div className="inline-block px-5 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8 text-sm md:text-base">

            🔥 India’s Next-Gen AI EdTech Platform

          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-8">

            Crack
            {" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

              JEE & NEET

            </span>

            <br />

            With Smart Tests 🚀

          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">

            Unlimited mock tests,
            PYQs, premium notes,
            rank prediction and real analytics 😎🔥

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <Link
              href="/jee-tests"
              className="px-8 py-5 md:px-12 md:py-6 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg md:text-xl font-bold shadow-2xl hover:scale-105 transition"
            >

              JEE Test Series ⚡

            </Link>

            <Link
              href="/neet-tests"
              className="px-8 py-5 md:px-12 md:py-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl text-lg md:text-xl font-bold hover:bg-white/10 transition"
            >

              NEET Test Series 🧬

            </Link>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">

          {stats.map((item,index)=>(

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-6 md:p-10 text-center"
            >

              <h2 className="text-3xl md:text-5xl font-black text-purple-400 mb-3 md:mb-4">

                {item.value}

              </h2>

              <p className="text-gray-300 text-sm md:text-lg">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURE CARDS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* AI CARD */}

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-[35px] p-6 md:p-10">

            <div className="text-6xl md:text-7xl mb-6 md:mb-8">

              🤖

            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-5 md:mb-6">

              AI Doubt Solver

            </h2>

            <p className="text-base md:text-lg text-white/90 mb-8 md:mb-10">

              Solve Physics, Chemistry,
              Maths & Biology doubts instantly 😎🔥

            </p>

            <a
              href="https://gemini.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-4 rounded-2xl bg-black text-base md:text-lg font-bold"
            >

              Open Gemini 🚀

            </a>

          </div>

          {/* RANK */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-6 md:p-10">

            <div className="text-6xl md:text-7xl mb-6 md:mb-8">

              📈

            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-5 md:mb-6">

              Rank Predictor

            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10">

              Predict your percentile,
              AIR and expected college 😎

            </p>

            <Link
              href="/rank-predictor"
              className="inline-block px-6 py-4 rounded-2xl bg-purple-600 text-base md:text-lg font-bold"
            >

              Predict Rank 🚀

            </Link>

          </div>

          {/* PREMIUM */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-6 md:p-10">

            <div className="text-6xl md:text-7xl mb-6 md:mb-8">

              💎

            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-5 md:mb-6">

              Premium Access

            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10">

              Unlock all tools,
              notes and premium tests 😎🔥

            </p>

            <Link
              href="/pricing"
              className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-base md:text-lg font-bold"
            >

              Upgrade 🚀

            </Link>

          </div>

        </div>

      </section>

      {/* ALL TOOLS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">

        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 md:mb-20">

          🚀 All Tools

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {tools.map((tool,index)=>(

            tool.link.startsWith("http")

            ?

            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-6 md:p-10 hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-6xl md:text-7xl mb-6 md:mb-8 group-hover:scale-110 transition">

                {tool.icon}

              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4">

                {tool.title}

              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">

                {tool.desc}

              </p>

            </a>

            :

            <Link
              key={index}
              href={tool.link}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-6 md:p-10 hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-6xl md:text-7xl mb-6 md:mb-8 group-hover:scale-110 transition">

                {tool.icon}

              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4">

                {tool.title}

              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">

                {tool.desc}

              </p>

            </Link>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm md:text-base px-4">

        © 2025 Exam Cracker 🚀 | Built For JEE & NEET Aspirants

      </footer>

    </main>

  );

}