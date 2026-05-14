"use client";

import Link from "next/link";

export default function JEETestsPage(){

  const tests = [

    {

      title:"JEE Full Test 1",

      description:
      "Full syllabus mock test for JEE aspirants 😎🔥",

      icon:"🚀",

      color:
      "from-purple-500 to-blue-500"

    },

    {

      title:"Physics Test",

      description:
      "Advanced Physics practice set 😎🔥",

      icon:"⚡",

      color:
      "from-yellow-500 to-orange-500"

    },

    {

      title:"Chemistry Test",

      description:
      "Physical + Organic + Inorganic practice 😎🔥",

      icon:"🧪",

      color:
      "from-green-500 to-emerald-500"

    },

    {

      title:"Maths Test",

      description:
      "High-level JEE Maths questions 😎🔥",

      icon:"📐",

      color:
      "from-pink-500 to-rose-500"

    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">

          🚀 JEE Test Series

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Crack
          {" "}

          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

            JEE

          </span>

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Attempt professional level JEE mock tests 😎🔥

        </p>

      </section>

      {/* TESTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {

            tests.map((test,index)=>(

              <div
                key={index}
                className="relative rounded-[45px] p-[2px]"
              >

                <div className={`absolute inset-0 rounded-[45px] bg-gradient-to-br ${test.color}`}></div>

                <div className="relative bg-[#0B1120] rounded-[43px] p-10 h-full">

                  <div className="text-7xl mb-8">

                    {test.icon}

                  </div>

                  <h2 className="text-5xl font-black mb-6 leading-tight">

                    {test.title}

                  </h2>

                  <p className="text-gray-300 text-xl leading-relaxed mb-10">

                    {test.description}

                  </p>

                  <Link
                    href="/mock-test"
                    className={`inline-flex items-center gap-3 px-8 py-5 rounded-3xl bg-gradient-to-r ${test.color} text-2xl font-black`}
                  >

                    Start Test 🚀

                  </Link>

                </div>

              </div>

            ))

          }

        </div>

      </section>

    </main>

  );

}