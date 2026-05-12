"use client";

import Link from "next/link";

export default function JEETestsPage() {

  const tests = [

    {
      title:"JEE Full Syllabus Test",
      icon:"🚀",
      link:"/mock-test?exam=JEE"
    },

    {
      title:"Physics Test",
      icon:"⚡",
      link:"/mock-test?subject=Physics"
    },

    {
      title:"Chemistry Test",
      icon:"🧪",
      link:"/mock-test?subject=Chemistry"
    },

    {
      title:"Maths Test",
      icon:"📘",
      link:"/mock-test?subject=Maths"
    },

    {
      title:"Gravitation Chapter Test",
      icon:"🌍",
      link:"/mock-test?chapter=Gravitation"
    },

    {
      title:"Current Electricity Test",
      icon:"🔋",
      link:"/mock-test?chapter=Current Electricity"
    }

  ];

  return (

    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-[45px] p-12">

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">

            <div>

              <div className="inline-block px-5 py-2 rounded-full bg-white/20 mb-6">

                ⚡ JEE Smart Test Series

              </div>

              <h1 className="text-6xl font-black leading-tight mb-6">

                Real JEE
                <br />

                Mock Tests 😎🔥

              </h1>

              <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">

                Smart filtered tests with
                real PYQs and chapter-wise practice 🚀

              </p>

            </div>

            <div className="text-[150px]">

              ⚡

            </div>

          </div>

        </div>

      </section>

      {/* TESTS */}

      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {tests.map((test,index)=>(

            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-10 hover:border-purple-500 transition"
            >

              <div className="text-7xl mb-8">

                {test.icon}

              </div>

              <h2 className="text-4xl font-black mb-6">

                {test.title}

              </h2>

              <div className="space-y-3 text-gray-300 mb-10">

                <p>

                  ✅ Smart Auto Filtering

                </p>

                <p>

                  ✅ Real JEE Questions

                </p>

                <p>

                  ✅ 25 Questions

                </p>

              </div>

              <Link
                href={test.link}
                className="block text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-bold"
              >

                Start Test 🚀

              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>

  );

}