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

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden pb-32">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-black">

            🚀 Exam Cracker

          </h1>

          <div className="hidden md:flex gap-8 text-base md:text-lg">

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

      <section className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-600/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-600/20 blur-[100px] rounded-full"></div>

        <div className="relative z-10 text-center">

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 text-sm md:text-base">

            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            India’s Smartest JEE & NEET Platform 😎🔥

          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-6">

            Crack
            {" "}

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">

              JEE & NEET

            </span>

            <br />

            Like A Topper 🚀

          </h1>

          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">

            Unlimited mock tests,
            PYQs, AI doubt solving,
            rank prediction and premium study tools 😎🔥

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/jee-tests"
              className="group px-8 py-5 rounded-[28px] bg-gradient-to-r from-purple-600 to-blue-600 text-base md:text-lg font-bold shadow-2xl active:scale-95 transition-all duration-300"
            >

              Start JEE 🚀

            </Link>

            <Link
              href="/neet-tests"
              className="px-8 py-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl text-base md:text-lg font-bold active:scale-95 hover:bg-white/10 transition-all"
            >

              Start NEET 🧬

            </Link>

          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm md:text-base text-gray-400">

            <div>

              ✅ 25K+ Students

            </div>

            <div>

              ⚡ 500+ Tests

            </div>

            <div>

              🏆 Real Analytics

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        <div className="relative overflow-hidden rounded-[32px] md:rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-10">

          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <div className="text-center mb-10">

              <div className="inline-block px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm md:text-base mb-5">

                🚀 Trusted By Students

              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-4">

                Real Results 😎🔥

              </h2>

              <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">

                Thousands of students use Exam Cracker daily 😎🚀

              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

              {stats.map((item,index)=>(

                <div
                  key={index}
                  className="bg-black/20 border border-white/10 rounded-[24px] md:rounded-[32px] p-5 md:p-7 text-center hover:border-purple-500/40 transition-all duration-300"
                >

                  <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-3">

                    {item.value}

                  </h2>

                  <p className="text-gray-300 text-sm md:text-base font-medium">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FEATURE CARDS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-[28px] md:rounded-[40px] p-5 md:p-10">

            <div className="text-5xl md:text-7xl mb-6 md:mb-8">

              🤖

            </div>

            <h2 className="text-2xl md:text-4xl font-black mb-5 md:mb-6">

              AI Doubt Solver

            </h2>

            <p className="text-sm md:text-lg text-white/90 mb-8 md:mb-10">

              Solve Physics, Chemistry,
              Maths & Biology doubts instantly 😎🔥

            </p>

            <a
              href="https://gemini.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-4 rounded-2xl bg-black text-sm md:text-lg font-bold"
            >

              Open Gemini 🚀

            </a>

          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-10">

            <div className="text-5xl md:text-7xl mb-6 md:mb-8">

              📈

            </div>

            <h2 className="text-2xl md:text-4xl font-black mb-5 md:mb-6">

              Rank Predictor

            </h2>

            <p className="text-sm md:text-lg text-gray-300 mb-8 md:mb-10">

              Predict your percentile,
              AIR and expected college 😎🔥

            </p>

            <Link
              href="/rank-predictor"
              className="inline-block px-6 py-4 rounded-2xl bg-purple-600 text-sm md:text-lg font-bold"
            >

              Predict Rank 🚀

            </Link>

          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-10">

            <div className="text-5xl md:text-7xl mb-6 md:mb-8">

              💎

            </div>

            <h2 className="text-2xl md:text-4xl font-black mb-5 md:mb-6">

              Premium Access

            </h2>

            <p className="text-sm md:text-lg text-gray-300 mb-8 md:mb-10">

              Unlock all tools,
              notes and premium tests 😎🔥

            </p>

            <Link
              href="/pricing"
              className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-sm md:text-lg font-bold"
            >

              Upgrade 🚀

            </Link>

          </div>

        </div>

      </section>

      {/* ALL TOOLS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">

        <div className="text-center mb-14">

          <div className="inline-block px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm md:text-base mb-6">

            🚀 Smart Student Tools

          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-5">

            Everything You Need 😎🔥

          </h2>

          <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto">

            Practice smarter with AI,
            mock tests and analytics 😎🚀

          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

          {tools.map((tool,index)=>(

            tool.link.startsWith("http")

            ?

            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-8 hover:border-purple-500/50 active:scale-[0.98] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">

                <div className="text-5xl md:text-7xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition duration-300">

                  {tool.icon}

                </div>

                <h3 className="text-xl md:text-3xl font-black mb-4">

                  {tool.title}

                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">

                  {tool.desc}

                </p>

                <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-sm md:text-base">

                  Open Tool 🚀

                </div>

              </div>

            </a>

            :

            <Link
              key={index}
              href={tool.link}
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] md:rounded-[40px] p-5 md:p-8 hover:border-purple-500/50 active:scale-[0.98] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">

                <div className="text-5xl md:text-7xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition duration-300">

                  {tool.icon}

                </div>

                <h3 className="text-xl md:text-3xl font-black mb-4">

                  {tool.title}

                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">

                  {tool.desc}

                </p>

                <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-sm md:text-base">

                  Open Tool 🚀

                </div>

              </div>

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