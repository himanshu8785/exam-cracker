"use client";

import Link from "next/link";

import {
  usePathname
} from "next/navigation";

export default function BottomNav(){

  const pathname =
  usePathname();

  const navItems = [

    {
      label:"Home",
      href:"/",
      icon:"🏠"
    },

    {
      label:"JEE",
      href:"/jee-tests",
      icon:"⚡"
    },

    {
      label:"NEET",
      href:"/neet-tests",
      icon:"🧬"
    },

    {
      label:"Premium",
      href:"/pricing",
      icon:"💎"
    },

    {
      label:"Profile",
      href:"/profile",
      icon:"👤"
    }

  ];

  return(

    <div className="fixed bottom-0 left-0 w-full z-50">

      {/* BLUR BG */}

      <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl border-t border-white/10"></div>

      <div className="relative max-w-2xl mx-auto px-3 pb-3 pt-2">

        <div className="grid grid-cols-5 gap-2">

          {

            navItems.map((item,index)=>(

              <Link
                key={index}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 py-3 rounded-2xl transition-all duration-300

                ${pathname === item.href

                  ?

                  "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl scale-105"

                  :

                  "text-gray-400 active:scale-95"

                }`}
              >

                <div className="text-2xl">

                  {item.icon}

                </div>

                <p className="text-[11px] font-bold">

                  {item.label}

                </p>

              </Link>

            ))

          }

        </div>

      </div>

    </div>

  );

}