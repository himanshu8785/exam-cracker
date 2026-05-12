"use client";

import Link from "next/link";

export default function HomePage() {

  const tools = [

    {
      title:"Test Series",
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

  const categories = [

    "JEE Main",

    "JEE Advanced",

    "NEET",

    "Physics",

    "Chemistry",

    "Maths",

    "Biology",

    "PYQs"

  ];

  return (

    <main className="min-h-screen bg-[#0b1120] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-[50px] p-12">

          <h1 className="text-7xl font-black leading-tight mb-6">

            Crack
            {" "}

            <span className="text-yellow-300">

              JEE & NEET

            </span>

            <br />

            With AI 🚀

          </h1>

          <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed mb-10">

            Unlimited mock tests,
            AI doubt solving,
            premium notes,
            PYQs and rank prediction 😎🔥

          </p>

          <div className="flex flex-col md:flex-row gap-5">

            <Link
              href="/test-series"
              className="px-10 py-5 rounded-2xl bg-black text-xl font-bold"
            >

              Start Mock Tests 🚀

            </Link>

            <Link
              href="/pricing"
              className="px-10 py-5 rounded-2xl border border-white text-xl font-bold"
            >

              Buy Premium 💎

            </Link>

          </div>

        </div>

      </section>

      {/* SEARCH */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-[#111827] border border-gray-800 rounded-[35px] p-8">

          <input
            type="text"
            placeholder="Search notes, PYQs, mock tests..."
            className="w-full bg-[#1e293b] text-white rounded-2xl px-6 py-5 outline-none text-lg"
          />

          <div className="flex flex-wrap gap-4 mt-8">

            {categories.map((item,index)=>(

              <button
                key={index}
                className="bg-[#1e293b] px-5 py-3 rounded-2xl text-sm hover:bg-purple-600 transition"
              >

                {item}

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* ANALYTICS CARDS */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-[#111827] border border-gray-800 rounded-[35px] p-10">

            <div className="text-6xl mb-6">

              📈

            </div>

            <h2 className="text-4xl font-black mb-4">

              AIR Predictor
            </h2>

            <p className="text-gray-400 mb-8">

              Predict your JEE/NEET rank instantly 😎

            </p>

            <Link
              href="/rank-predictor"
              className="inline-block px-6 py-4 rounded-2xl bg-purple-600 font-semibold"
            >

              Predict Rank 🚀

            </Link>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-[35px] p-10">

            <div className="text-6xl mb-6">

              🔥

            </div>

            <h2 className="text-4xl font-black mb-4">

              Daily Quiz
            </h2>

            <p className="text-gray-400 mb-8">

              Daily JEE/NEET PYQs practice 😎

            </p>

            <Link
              href="/daily-quiz"
              className="inline-block px-6 py-4 rounded-2xl bg-blue-600 font-semibold"
            >

              Start Quiz 🚀

            </Link>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-[35px] p-10">

            <div className="text-6xl mb-6">

              💎

            </div>

            <h2 className="text-4xl font-black mb-4">

              Premium Access
            </h2>

            <p className="text-gray-400 mb-8">

              Unlock all tools and notes 😎🔥

            </p>

            <Link
              href="/pricing"
              className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold"
            >

              Upgrade 🚀

            </Link>

          </div>

        </div>

      </section>

      {/* ALL TOOLS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

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