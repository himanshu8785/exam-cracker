"use client";

import Link from "next/link";

export default function TestSeriesPage() {

  const jeeTests = [

    {
      title:"JEE Main Mock Test 1",
      subject:"Physics + Chemistry + Maths",
      questions:25,
      duration:"60 mins",
      difficulty:"Medium"
    },

    {
      title:"JEE Advanced Challenge",
      subject:"Advanced Mixed Questions",
      questions:25,
      duration:"90 mins",
      difficulty:"Hard"
    },

    {
      title:"Physics PYQ Test",
      subject:"Current Electricity",
      questions:25,
      duration:"45 mins",
      difficulty:"Easy"
    },

    {
      title:"Maths Full Syllabus",
      subject:"Calculus + Algebra",
      questions:25,
      duration:"60 mins",
      difficulty:"Hard"
    }

  ];

  const neetTests = [

    {
      title:"NEET Mock Test 1",
      subject:"Physics + Chemistry + Biology",
      questions:25,
      duration:"60 mins",
      difficulty:"Medium"
    },

    {
      title:"Biology NCERT Test",
      subject:"Human Physiology",
      questions:25,
      duration:"45 mins",
      difficulty:"Easy"
    },

    {
      title:"NEET PYQ Challenge",
      subject:"Mixed PYQs",
      questions:25,
      duration:"60 mins",
      difficulty:"Hard"
    },

    {
      title:"Chemistry Rapid Revision",
      subject:"Organic Chemistry",
      questions:25,
      duration:"45 mins",
      difficulty:"Medium"
    }

  ];

  function TestCard({test}:any){

    return(

      <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

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

    );

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black text-center mb-4">

          🚀 Test Series Dashboard

        </h1>

        <p className="text-center text-gray-400 text-xl mb-16">

          Unlimited JEE + NEET Mock Tests 😎🔥

        </p>

        {/* JEE SECTION */}

        <div className="mb-20">

          <div className="flex items-center gap-4 mb-10">

            <div className="text-6xl">

              ⚡

            </div>

            <h2 className="text-5xl font-black text-purple-500">

              JEE Test Series

            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {jeeTests.map((test,index)=>(

              <TestCard
                key={index}
                test={test}
              />

            ))}

          </div>

        </div>

        {/* NEET SECTION */}

        <div>

          <div className="flex items-center gap-4 mb-10">

            <div className="text-6xl">

              🧬

            </div>

            <h2 className="text-5xl font-black text-green-400">

              NEET Test Series

            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {neetTests.map((test,index)=>(

              <TestCard
                key={index}
                test={test}
              />

            ))}

          </div>

        </div>

      </div>

    </main>

  );

}