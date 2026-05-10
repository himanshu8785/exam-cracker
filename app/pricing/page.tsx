"use client";

import { useState } from "react";

import Image from "next/image";

export default function PricingPage() {

  const [showQR,setShowQR] =
  useState(false);

  const [selectedPlan,setSelectedPlan] =
  useState("");

  const plans = [

    {
      name:"BASIC",
      price:"₹19",
      features:[
        "Mock Tests",
        "Daily Quiz",
        "Basic Rank Predictor"
      ]
    },

    {
      name:"PRO",
      price:"₹49",
      features:[
        "All Mock Tests",
        "PYQs",
        "Advanced Rank Predictor",
        "Study Material",
        "Performance Analytics"
      ]
    },

    {
      name:"ELITE",
      price:"₹299",
      features:[
        "Unlimited Access",
        "All Premium Tests",
        "AI Doubt Solver",
        "Personal Guidance",
        "Elite Test Series"
      ]
    }

  ];

  function openPayment(plan){

    setSelectedPlan(plan);

    setShowQR(true);

  }

  return (

    <main className="min-h-screen bg-[#0b1120] text-white p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black text-center mb-4">

          💎 <span className="text-purple-500">
            Premium Plans
          </span>

        </h1>

        <p className="text-center text-gray-400 text-xl mb-16">

          Unlock full JEE / NEET preparation 🚀

        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan,index)=>(

            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 flex flex-col justify-between"
            >

              <div>

                <h2 className="text-4xl font-black mb-4">

                  {plan.name}

                </h2>

                <h3 className="text-5xl font-black text-purple-500 mb-10">

                  {plan.price}

                  <span className="text-lg text-gray-400">

                    /month

                  </span>

                </h3>

                <div className="space-y-5">

                  {plan.features.map((feature,i)=>(

                    <div
                      key={i}
                      className="bg-[#1e293b] rounded-2xl p-4"
                    >

                      ✅ {feature}

                    </div>

                  ))}

                </div>

              </div>

              <div className="mt-10">

                <button
                  onClick={()=>
                    openPayment(plan.name)
                  }
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-semibold"
                >

                  Buy Now 🚀

                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 mt-16 text-center">

          <h2 className="text-4xl font-black mb-6">

            📲 Payment Instructions
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">

            After payment,
            send screenshot on WhatsApp
            for premium activation 😎🔥

          </p>

          <div className="mt-8 text-3xl font-black text-purple-500">

            +91 9336593375

          </div>

        </div>

      </div>

      {showQR && (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">

          <div className="bg-[#111827] border border-gray-800 rounded-[40px] p-10 max-w-md w-full text-center">

            <h2 className="text-4xl font-black mb-3">

              Scan To Pay 😎
            </h2>

            <p className="text-gray-400 mb-8">

              Selected Plan:
              <span className="text-purple-500 font-bold">

                {" "} {selectedPlan}

              </span>

            </p>

            <div className="flex justify-center mb-8">

              <Image
                src="/gpay-qr.jpg"
                alt="Google Pay QR"
                width={260}
                height={260}
                className="rounded-3xl"
              />

            </div>

            <p className="text-gray-400 mb-8 leading-relaxed">

              Scan QR using Google Pay,
              PhonePe or Paytm 🚀

            </p>

            <button
              onClick={()=>
                setShowQR(false)
              }
              className="w-full py-4 rounded-2xl bg-red-500 font-semibold"
            >

              Close

            </button>

          </div>

        </div>

      )}

    </main>

  );

}