"use client";

import { useState } from "react";

export default function PricingPage(){

  const [selectedPlan,setSelectedPlan] =
  useState<any>(null);

  const plans = [

    {

      name:"BASIC",

      price:"₹29",

      color:"from-purple-600 to-pink-500",

      features:[

        "10 Mock Tests",

        "Daily Quiz",

        "Limited PYQs",

        "Basic Notes"

      ],

      popular:false

    },

    {

      name:"PRO",

      price:"₹69",

      color:"from-blue-600 to-cyan-500",

      features:[

        "50+ Mock Tests",

        "Full PYQs",

        "Leaderboard Access",

        "Analytics Dashboard",

        "Premium Notes"

      ],

      popular:true

    },

    {

      name:"ELITE",

      price:"₹299",

      color:"from-yellow-400 to-orange-500",

      features:[

        "ALL Tests",

        "ALL Notes",

        "Future AI Features",

        "Advanced Analytics",

        "Elite Access"

      ],

      popular:false

    }

  ];

  return(

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-block px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">

          💎 Premium Membership

        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">

          Unlock
          {" "}

          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">

            Premium

          </span>

          <br />

          Features 🚀

        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

          Access premium mock tests,
          PYQs, analytics,
          notes and future AI tools 😎🔥

        </p>

      </section>

      {/* PRICING */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((plan,index)=>(

            <div
              key={index}
              className={`relative rounded-[45px] p-[2px]

              ${plan.popular

                ?

                "scale-105 shadow-[0_0_60px_rgba(59,130,246,0.5)]"

                :

                ""

              }`}
            >

              <div className={`absolute inset-0 rounded-[45px] bg-gradient-to-br ${plan.color}`}></div>

              <div className="relative bg-[#0B1120] rounded-[43px] p-10 h-full overflow-hidden">

                {

                  plan.popular && (

                    <div className="absolute top-5 right-5 bg-blue-500 px-5 py-2 rounded-full text-sm font-bold">

                      🔥 MOST POPULAR

                    </div>

                  )

                }

                <div className="mb-10">

                  <h2 className="text-5xl font-black mb-6">

                    {plan.name}

                  </h2>

                  <div className="flex items-end gap-2">

                    <span className="text-7xl font-black">

                      {plan.price}

                    </span>

                    <span className="text-gray-400 text-xl mb-3">

                      /month

                    </span>

                  </div>

                </div>

                <div className="space-y-5 mb-12">

                  {plan.features.map((feature,i)=>(

                    <div
                      key={i}
                      className="flex items-center gap-4 text-lg"
                    >

                      <div className="text-green-400 text-2xl">

                        ✅

                      </div>

                      <span>

                        {feature}

                      </span>

                    </div>

                  ))}

                </div>

                {/* BUY BUTTON */}

                <button

                  onClick={()=>{

                    setSelectedPlan(plan);

                  }}

                  className={`w-full py-5 rounded-2xl text-xl font-black bg-gradient-to-r ${plan.color}`}

                >

                  Buy {plan.name} 🚀

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* QR POPUP */}

      {

        selectedPlan && (

          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-6">

            <div className="bg-[#0B1120] border border-white/10 rounded-[45px] p-10 max-w-md w-full relative">

              {/* CLOSE */}

              <button

                onClick={()=>{

                  setSelectedPlan(null);

                }}

                className="absolute top-5 right-5 w-12 h-12 rounded-full bg-red-500 text-2xl font-black"

              >

                ×

              </button>

              <div className="text-center">

                <div className="text-7xl mb-6">

                  💳

                </div>

                <h2 className="text-5xl font-black mb-4">

                  {selectedPlan.name}

                </h2>

                <p className="text-3xl text-purple-400 font-black mb-8">

                  {selectedPlan.price}

                </p>

                {/* QR */}

                <img
                  src="/gpay-qr.jpg"
                  alt="UPI QR"
                  className="w-[260px] h-[260px] mx-auto rounded-[35px] object-cover mb-8"
                />

                {/* UPI */}

                <div className="bg-[#111827] rounded-3xl p-5 mb-8">

                  <p className="text-gray-400 mb-2">

                    UPI ID

                  </p>

                  <h3 className="text-2xl font-black break-all text-green-400">

                    examcracker@naviaxis

                  </h3>

                </div>

                {/* TEXT */}

                <p className="text-gray-300 leading-relaxed mb-8">

                  Scan QR using GPay,
                  PhonePe or Paytm
                  and send payment screenshot
                  on WhatsApp 😎🔥

                </p>

                {/* WHATSAPP */}

                <a
                  href="https://wa.me/"
                  target="_blank"
                  className="block w-full py-5 rounded-2xl bg-green-600 text-xl font-black"
                >

                  Send Screenshot 🚀

                </a>

              </div>

            </div>

          </div>

        )

      }

    </main>

  );

}