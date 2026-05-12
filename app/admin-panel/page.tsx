"use client";

import Link from "next/link";

export default function AdminPanelPage() {

  return (

    <main className="min-h-screen bg-[#050816] text-white p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-6xl font-black text-center mb-6">

          🚀 Admin Panel

        </h1>

        <p className="text-center text-gray-400 text-xl mb-16">

          Upload JEE / NEET Questions 😎🔥

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CSV Upload */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">

            <div className="text-7xl mb-8">

              📄

            </div>

            <h2 className="text-4xl font-black mb-6">

              CSV Upload

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">

              Upload bulk JEE / NEET
              questions instantly 😎

            </p>

            <Link
              href="/admin-panel/csv-upload"
              className="block text-center py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-bold"
            >

              Open CSV Upload 🚀

            </Link>

          </div>

          {/* JSON Upload */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">

            <div className="text-7xl mb-8">

              🔥

            </div>

            <h2 className="text-4xl font-black mb-6">

              JSON Upload

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">

              Upload JSON data for
              dynamic test generation 😎

            </p>

            <Link
              href="/admin-panel/json-upload"
              className="block text-center py-5 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-lg font-bold"
            >

              Open JSON Upload 🚀

            </Link>

          </div>

        </div>

      </div>

    </main>

  );

}