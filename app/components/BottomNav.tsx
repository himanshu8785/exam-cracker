"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    label:"AI",
    href:"/ai-doubt-solver",
    icon:"🤖"
  },

  {
    label:"Premium",
    href:"/premium",
    icon:"💎"
  },

  {
    label:"Profile",
    href:"/profile",
    icon:"👤"
  }

];

  return(

    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4">

      <div className="max-w-7xl mx-auto">

        <div className="bg-[#0B1120]/90 backdrop-blur-2xl border border-white/10 rounded-[35px] px-4 py-4 shadow-2xl">

          <div className="flex justify-between items-center gap-2 overflow-x-auto scrollbar-hide">

            {navItems.map((item,index)=>(

              <Link
                key={index}
                href={item.href}
                className={`min-w-[90px] flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300

                ${pathname === item.href

                  ?

                  "bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-105"

                  :

                  "text-gray-400 hover:text-white hover:bg-white/5"

                }`}
              >

                <div className="text-2xl">

                  {item.icon}

                </div>

                <p className="text-sm font-bold whitespace-nowrap">

                  {item.label}

                </p>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}