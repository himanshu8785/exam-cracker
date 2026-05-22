"use client";

import Link from "next/link";

export default function NEETSubjectwisePage(){

  const subjects = [

    {
      title:"Physics",
      icon:"⚡",
      color:"from-blue-500 to-cyan-500"
    },

    {
      title:"Chemistry",
      icon:"🧪",
      color:"from-purple-500 to-pink-500"
    },

    {
      title:"Botany",
      icon:"🌿",
      color:"from-green-500 to-emerald-500"
    },

    {
      title:"Zoology",
      icon:"🦁",
      color:"from-orange-500 to-red-500"
    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-10 pb-32">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-block px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-sm md:text-base mb-6">

            🧬 NEET Subjectwise Tests

          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6">

            Subjectwise Tests 😎🔥

          </h1>

          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">

            Practice subjectwise NEET mock tests 🚀

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {subjects.map((subject,index)=>(

            <Link
              key={index}
              href={`/neet-tests/subjectwise/${subject.title.toLowerCase()}`}
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-10 hover:border-green-500/50 active:scale-[0.98] hover:-translate-y-2 transition-all duration-300"
            >

              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-r ${subject.color} opacity-10 blur-3xl rounded-full`}></div>

              <div className="relative z-10">

                <div className="text-7xl mb-8">

                  {subject.icon}

                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-5">

                  {subject.title}

                </h2>

                <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-sm md:text-lg font-bold">

                  Start Tests 🚀

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );

}