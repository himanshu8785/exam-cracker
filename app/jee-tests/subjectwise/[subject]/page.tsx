"use client";

import Link from "next/link";

import {
  useParams
} from "next/navigation";

export default function JEESubjectTestsPage(){

  const params =
  useParams();

  const subject =
  params.subject;

  const tests = Array.from(

    {length:100},

    (_,index)=>({

      title:`${subject} Test ${index+1}`,

      questions:"30 Questions",

      time:"60 Min"

    })

  );

  return(

    <main className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-10 pb-32">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="text-center mb-16">

          <div className="inline-block px-5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm md:text-base mb-6">

            🚀 JEE Subject Tests

          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 capitalize">

            {subject} Tests 😎🔥

          </h1>

          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">

            Practice all {subject} tests 🚀

          </p>

        </div>

        {/* TEST GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {tests.map((test,index)=>(

            <div
              key={index}
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 md:p-8 hover:border-purple-500/50 active:scale-[0.98] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="relative z-10">

                <div className="text-6xl mb-6">

                  ⚡

                </div>

                <h2 className="text-2xl font-black mb-5 capitalize">

                  {test.title}

                </h2>

                <div className="flex items-center justify-between text-gray-400 text-sm mb-8">

                  <span>

                    📝 {test.questions}

                  </span>

                  <span>

                    ⏱ {test.time}

                  </span>

                </div>

                <Link
                  href={`/jee-tests/mock-test?testId=jee-${subject}-${index+1}`}
                  className="inline-block w-full text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-sm md:text-lg font-bold active:scale-95 transition-all"
                >

                  Start Test 🚀

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}