"use client";

import Link from "next/link";

export default function TestSeriesPage() {

  const tests = [

    {
      title:"JEE Main Mock Test 1",
      questions:25,
      duration:"60 mins",
      subject:"Physics + Chemistry + Maths",
      difficulty:"Medium"
    },

    {
      title:"JEE Main PYQ Test",
      questions:25,
      duration:"90 mins",
      subject:"PYQ Mixed Questions",
      difficulty:"Hard"
    },

    {
      title:"NEET Full Syllabus Test",
      questions:25,
      duration:"60 mins",
      subject:"Physics + Chemistry + Biology",
      difficulty:"Medium"
    },

    {
      title:"Physics Chapter Test",
      questions:25,
      duration:"45 mins",
      subject:"Current Electricity",
      difficulty:"Easy"
    },

    {
      title:"Chemistry PYQ Challenge",
      questions:25,
      duration:"45 mins",
      subject:"Organic Chemistry",
      difficulty:"Hard"
    }

  ];

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black text-center mb-4">

          🚀 Test Series

        </h1>

        <p className="text-center text-gray-400 text-xl mb-16">

          JEE / NEET Mock Tests + PYQs 😎🔥

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {tests.map((test,index)=>(

            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-[40px] p-10"
            >

              <div className="text-7xl mb-8">

                📝

              </div>

              <h2 className="text-4xl font-black mb-6">

                {test.title}

              </h2>

              <div className="space-y-4 text-lg">

                <p>

                  📚 Subject:
                  {" "}
                  <span className="text-purple-400">

                    {test.subject}

                  </span>

                </p>

                <p>

                  ❓ Questions:
                  {" "}
                  {test.questions}

                </p>

                <p>

                  ⏱ Duration:
                  {" "}
                  {test.duration}

                </p>

                <p>

                  🔥 Difficulty:
                  {" "}
                  {test.difficulty}

                </p>

              </div>

              <div className="mt-10">

                <Link
                  href="/mock-test"
                  className="block text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
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