"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function BottomNav() {

  const pathname = usePathname();

  const navItems = [

    {
      name:"Home",
      link:"/"
    },

    {
      name:"Tests",
      link:"/mock-test"
    },

    {
      name:"Rank",
      link:"/rank-predictor"
    },

    {
      name:"Profile",
      link:"/profile"
    },

    {
      name:"Premium",
      link:"/premium"
    }

  ];

  return (

    <div className="fixed bottom-0 left-0 w-full bg-[#111827] border-t border-gray-800 md:hidden z-50">

      <div className="grid grid-cols-5">

        {navItems.map((item,index)=>(

          <Link
            href={item.link}
            key={index}
          >

            <div
              className={`flex flex-col items-center justify-center py-4 text-sm transition

              ${pathname === item.link

                ? "text-purple-500"

                : "text-gray-400"

              }`}
            >

              <p className="font-semibold">

                {item.name}

              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>

  );

}