"use client";

import Link from "next/link";

export default function HomePage() {

  const tools = [

    {
      title:"Mock Tests",
      link:"/test-series",
      icon:"📝"
    },

    {
      title:"AI Doubt Solver",
      link:"/ai-doubt-solver",
      icon:"🤖"
    },

    {
      title:"Rank Predictor",
      link:"/rank-predictor",
      icon:"📊"
    },

    {
      title:"Study Material",
      link:"/study-material",
      icon:"📚"
    },

    {
      title:"Daily Quiz",
      link:"/daily-quiz",
      icon:"🔥"
    },

    {
      title:"Leaderboard",
      link:"/leaderboard",
      icon:"🏆"
    },

    {
      title:"Premium Plans",
      link:"/pricing",
      icon:"💎"
    },

    {
      title:"Profile",
      link:"/profile",
      icon:"👤"
    }

  ];

  return (

    <main className="min-h-screen bg-[#0b1120] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-7xl font-black leading-tight mb-8">

          Crack
          {" "}

          <span className="text-purple-500">

            JEE & NEET

          </span>

          <br />

          With AI 🚀

        </h1>

        <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">

          Mock tests, PYQs,
          AI doubt solving,
          premium notes and rank prediction 😎🔥

        </p>

        <Link
          href="/test-series"
          className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-xl font-semibold"
        >

          Start Preparation 🚀

        </Link>

      </section>

      {/* TOOLS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-5xl font-black text-center mb-16">

          🚀 All Tools

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {tools.map((tool,index)=>(

            <Link
              key={index}
              href={tool.link}
              className="bg-[#111827] border border-gray-800 rounded-[35px] p-10 hover:border-purple-500 transition"
            >

              <div className="text-6xl mb-6">

                {tool.icon}

              </div>

              <h3 className="text-3xl font-black mb-4">

                {tool.title}

              </h3>

              <p className="text-gray-400">

                Open {tool.title} 😎

              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>

  );

}