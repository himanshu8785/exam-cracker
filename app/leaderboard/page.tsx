"use client";

import Link from "next/link";

export default function LeaderboardPage(){

  const toppers = [

    {

      rank:1,

      name:"Aarav Sharma",

      score:"298",

      accuracy:"99%",

      streak:"45 Days",

      badge:"🏆 AIR 1"

    },

    {

      rank:2,

      name:"Priya Verma",

      score:"292",

      accuracy:"97%",

      streak:"39 Days",

      badge:"🥈 Topper"

    },

    {

      rank:3,

      name:"Rohan Gupta",

      score:"287",

      accuracy:"96%",

      streak:"35 Days",

      badge:"🥉 Elite"

    }

  ];

  const leaderboard = [

    {
      rank:4,
      name:"Aditya Singh",
      score:"281",
      accuracy:"94%"
    },

    {
      rank:5,
      name:"Sneha Patel",
      score:"276",
      accuracy:"92%"
    },

    {
      rank:6,
      name:"Yash Kumar",
      score:"272",
      accuracy:"91%"
    },

    {
      rank:7,
      name:"Kunal Mehta",
      score:"268",
      accuracy:"89%"
    },

    {
      rank:8,
      name:"Ananya Roy",
      score:"264",
      accuracy:"88%"
    },

    {
      rank:9,
      name:"Harsh Jain",
      score:"259",
      accuracy:"87%"
    },

    {
      rank:10,
      name:"Simran Kaur",
      score:"255",
      accuracy:"85%"
    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-8">

          🏆 National Rankings

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Student
          {" "}

          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">

            Leaderboard

          </span>

          <br />

          Rankings 🚀

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Compete with top JEE & NEET aspirants,
          improve your rank
          and become AIR 1 😎🔥

        </p>

      </section>

      {/* TOP 3 */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {toppers.map((topper,index)=>(

            <div
              key={index}
              className={`relative rounded-[45px] p-[2px]

              ${topper.rank === 1

                ?

                "scale-105"

                :

                ""

              }`}
            >

              <div className={`absolute inset-0 rounded-[45px]

              ${topper.rank === 1

                ?

                "bg-gradient-to-br from-yellow-400 to-orange-500"

                :

                topper.rank === 2

                ?

                "bg-gradient-to-br from-gray-300 to-gray-500"

                :

                "bg-gradient-to-br from-orange-700 to-orange-900"

              }`}></div>

              <div className="relative bg-[#0B1120] rounded-[43px] p-10 text-center">

                <div className="text-8xl mb-6">

                  {

                    topper.rank === 1

                    ?

                    "👑"

                    :

                    topper.rank === 2

                    ?

                    "🥈"

                    :

                    "🥉"

                  }

                </div>

                <div className="inline-block px-5 py-2 rounded-full bg-white/10 mb-6 text-lg font-bold">

                  {topper.badge}

                </div>

                <h2 className="text-4xl font-black mb-4">

                  {topper.name}

                </h2>

                <div className="text-7xl font-black text-yellow-400 mb-6">

                  #{topper.rank}

                </div>

                <div className="space-y-4 text-lg">

                  <p>

                    🎯 Accuracy:
                    {" "}
                    {topper.accuracy}

                  </p>

                  <p>

                    📈 Score:
                    {" "}
                    {topper.score}

                  </p>

                  <p>

                    🔥 Streak:
                    {" "}
                    {topper.streak}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FULL LEADERBOARD */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🚀

          </div>

          <h2 className="text-5xl font-black">

            Top Rankings

          </h2>

        </div>

        <div className="space-y-6">

          {leaderboard.map((student,index)=>(

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >

              <div className="flex items-center gap-6">

                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-black">

                  {student.rank}

                </div>

                <div>

                  <h3 className="text-3xl font-black mb-2">

                    {student.name}

                  </h3>

                  <p className="text-gray-400 text-lg">

                    Accuracy:
                    {" "}
                    {student.accuracy}

                  </p>

                </div>

              </div>

              <div className="text-5xl font-black text-purple-400">

                {student.score}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PREMIUM CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45px] p-12 text-center">

          <div className="text-8xl mb-8">

            💎

          </div>

          <h2 className="text-6xl font-black mb-8">

            Unlock Premium Rankings

          </h2>

          <p className="text-2xl text-white/90 mb-10 leading-relaxed">

            Access national rankings,
            advanced leaderboard stats,
            streak rankings and AI insights 😎🔥

          </p>

          <Link
            href="/pricing"
            className="inline-block px-12 py-5 rounded-3xl bg-black text-2xl font-black"
          >

            Upgrade to PRO 🚀

          </Link>

        </div>

      </section>

    </main>

  );

}