import "./globals.css";

import type { Metadata } from "next";

import BottomNav from "./components/BottomNav";

export const metadata: Metadata = {

  title: "Exam Cracker",

  description:
  "Best JEE & NEET Preparation Platform 😎🔥"

};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}){

  return(

    <html lang="en">

      <body className="bg-[#050816] text-white">

        {/* MAIN CONTENT */}

        <main className="pb-[120px]">

          {children}

        </main>

        {/* GLOBAL BOTTOM NAV */}

        <BottomNav />

      </body>

    </html>

  );

}