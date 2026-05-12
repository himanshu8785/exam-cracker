"use client";

import Link from "next/link";

export default function HomePage() {

  return (

    <main className="min-h-screen bg-[#0b1120] text-white">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-7xl font-black leading-tight mb-8">

          Crack
          {" "}

          <span className="text-purple-500">

            JEE & NEET

          </span>

          <br />

          With AI 🚀

        </h1>

        <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">

          Unlimited mock tests,
          PYQs, AI doubt solving,
          rank prediction and premium study material 😎🔥

        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          <Link
            href="/test-series"
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-xl font-semibold"
          >

            Start Mock Tests 🚀

          </Link>

          <Link
            href="/pricing"
            className="px-10 py-5 rounded-2xl border border-gray-700 text-xl font-semibold"
          >

            View Premium Plans 💎

          </Link>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

            <div className="text-7xl mb-8">

              📝

            </div>

            <h2 className="text-4xl font-black mb-6">

              Mock Tests

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">

              Unlimited JEE & NEET
              mock tests with PYQs 😎

            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

            <div className="text-7xl mb-8">

              🤖

            </div>

            <h2 className="text-4xl font-black mb-6">

              AI Doubt Solver

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">

              Solve Physics, Chemistry,
              Maths & Biology doubts instantly 🚀

            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10">

            <div className="text-7xl mb-8">

              📚

            </div>

            <h2 className="text-4xl font-black mb-6">

              Study Material

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">

              Notes, NCERT,
              formula sheets and PYQs 🔥

            </p>

          </div>

        </div>

      </section>

    </main>

  );

}