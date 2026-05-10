"use client";

import Link from "next/link";

export default function Footer() {

  return (

    <footer className="border-t border-gray-800 bg-[#111827] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-4xl font-bold text-white mb-4">

              Exam <span className="text-purple-500">
                Cracker
              </span>

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">

              India’s modern JEE & NEET preparation platform with AI tools, mock tests, analytics and smart learning 🚀

            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-white mb-5">

              Quick Links

            </h3>

            <div className="space-y-3">

              <Link href="/mock-test">

                <p className="text-gray-400 hover:text-purple-500 transition cursor-pointer">

                  Mock Tests

                </p>

              </Link>

              <Link href="/rank-predictor">

                <p className="text-gray-400 hover:text-purple-500 transition cursor-pointer">

                  Rank Predictor

                </p>

              </Link>

              <Link href="/leaderboard">

                <p className="text-gray-400 hover:text-purple-500 transition cursor-pointer">

                  Leaderboard

                </p>

              </Link>

              <Link href="/premium">

                <p className="text-gray-400 hover:text-purple-500 transition cursor-pointer">

                  Premium Plans

                </p>

              </Link>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-white mb-5">

              Platform

            </h3>

            <div className="space-y-3">

              <p className="text-gray-400">

                🚀 AI Powered Learning

              </p>

              <p className="text-gray-400">

                📊 Smart Analytics

              </p>

              <p className="text-gray-400">

                🏆 Competitive Mock Tests

              </p>

              <p className="text-gray-400">

                📚 JEE & NEET Preparation

              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">

          <p className="text-gray-500 text-lg">

            © 2026 Exam Cracker. Built for ambitious students 🚀

          </p>

        </div>

      </div>

    </footer>

  );

}