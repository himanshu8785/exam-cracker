"use client";

import Link from "next/link";

export default function JEETestsPage() {

  const completeTests = [

    "JEE Main Full Test 1",

    "JEE Main Full Test 2",

    "JEE Advanced Full Test",

    "Complete PYQ Challenge"

  ];

  const halfTests = [

    "Half Syllabus Test 1",

    "Half Syllabus Test 2",

    "Class 11 Revision Test",

    "Class 12 Revision Test"

  ];

  const subjectTests = [

    "Physics Advanced Test",

    "Chemistry PYQ Test",

    "Maths Calculus Test",

    "Physics Current Electricity"

  ];

  function TestCard({title}:any){

    return(

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 hover:border-purple-500 transition">

        <div className="flex justify-between items-center mb-6">

          <div className="text-5xl">

            📝

          </div>

          <div className="bg-purple-600 px-4 py-2 rounded-xl text-sm font-semibold">

            25 Questions

          </div>

        </div>

        <h2 className="text-3xl font-black mb-6">

          {title}

        </h2>

        <div className="space-y-3 text-gray-300 mb-8">

          <p>

            ⏱ Duration:
            {" "}
            60 mins

          </p>

          <p>

            📚 JEE Main + Advanced

          </p>

          <p>

            🔥 Real PYQ Level Questions

          </p>

        </div>

        <Link
          href="/mock-test"
          className="block text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-bold"
        >

          Start Test 🚀

        </Link>

      </div>

    );

  }

  return (

    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div className="bg-gradient-to-r from-purple-700 to-blue-700 rounded-[45px] p-12">

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">

            <div>

              <div className="inline-block px-5 py-2 rounded-full bg-white/20 mb-6">

                ⚡ JEE Test Series

              </div>

              <h1 className="text-6xl font-black leading-tight mb-6">

                Unlimited
                <br />

                JEE Mock Tests 😎🔥

              </h1>

              <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">

                Real JEE Main & Advanced
                PYQs with complete and half syllabus tests 🚀

              </p>

            </div>

            <div className="text-[150px]">

              ⚡

            </div>

          </div>

        </div>

      </section>

      {/* COMPLETE TESTS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🚀

          </div>

          <h2 className="text-5xl font-black">

            Complete Syllabus Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {completeTests.map((item,index)=>(

            <TestCard
              key={index}
              title={item}
            />

          ))}

        </div>

      </section>

      {/* HALF TESTS */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            📚

          </div>

          <h2 className="text-5xl font-black">

            Half Syllabus Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {halfTests.map((item,index)=>(

            <TestCard
              key={index}
              title={item}
            />

          ))}

        </div>

      </section>

      {/* SUBJECT TESTS */}

      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">

        <div className="flex items-center gap-4 mb-12">

          <div className="text-5xl">

            🔥

          </div>

          <h2 className="text-5xl font-black">

            Subject Wise Tests

          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {subjectTests.map((item,index)=>(

            <TestCard
              key={index}
              title={item}
            />

          ))}

        </div>

      </section>

    </main>

  );

}