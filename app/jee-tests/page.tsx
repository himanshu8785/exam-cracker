"use client";

import Link from "next/link";

export default function JEETestsPage(){

  const tests = [

    {

      title:"JEE Full Test 1",

      description:
      "Complete syllabus mock test 😎🔥",

      icon:"🚀",

      color:
      "from-purple-500 to-blue-500"

    },

    {

      title:"Physics Test",

      description:
      "Advanced Physics practice 😎🔥",

      icon:"⚡",

      color:
      "from-yellow-500 to-orange-500"

    },

    {

      title:"Chemistry Test",

      description:
      "Organic + Physical + IOC 😎🔥",

      icon:"🧪",

      color:
      "from-green-500 to-emerald-500"

    },

    {

      title:"Maths Test",

      description:
      "JEE level Maths practice 😎🔥",

      icon:"📐",

      color:
      "from-pink-500 to-rose-500"

    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden pb-32">

      {/* HERO */}

      <section className="relative max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-16 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-purple-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 text-center">

          <div className="inline-block px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm md:text-base mb-6">

            ⚡ India’s Smartest JEE Practice Platform

          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05]">

            Crack
            {" "}

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

              JEE

            </span>

            <br />

            With Smart Tests 🚀

          </h1>

          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">

            Attempt premium level mock tests,
            improve speed and boost your AIR 😎🔥

          </p>

        </div>

      </section>

      {/* TESTS */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

          {

            tests.map((test,index)=>(

              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] md:rounded-[40px] p-[1px]"
              >

                {/* BORDER GRADIENT */}

                <div className={`absolute inset-0 rounded-[28px] md:rounded-[40px] bg-gradient-to-br ${test.color}`}></div>

                {/* CARD */}

                <div className="relative bg-[#0B1120] rounded-[28px] md:rounded-[38px] p-5 md:p-8 h-full overflow-hidden">

                  {/* GLOW */}

                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative z-10">

                    <div className="text-5xl md:text-7xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition duration-300">

                      {test.icon}

                    </div>

                    <h2 className="text-2xl md:text-5xl font-black mb-5 leading-tight">

                      {test.title}

                    </h2>

                    <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-8">

                      {test.description}

                    </p>

                    <Link
                      href="/mock-test"
                      className={`inline-flex items-center gap-3 px-6 py-4 rounded-[22px] bg-gradient-to-r ${test.color} text-sm md:text-lg font-black active:scale-95 transition-all duration-300`}
                    >

                      Start Test 🚀

                    </Link>

                  </div>

                </div>

              </div>

            ))

          }

        </div>

      </section>

    </main>

  );

}