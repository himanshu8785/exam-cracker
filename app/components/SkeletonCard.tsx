"use client";

export default function SkeletonCard() {

  return (

    <div className="animate-pulse bg-[#111827] border border-gray-800 rounded-3xl p-6">

      <div className="h-6 w-40 bg-[#1e293b] rounded mb-4" />

      <div className="h-4 w-60 bg-[#1e293b] rounded mb-6" />

      <div className="h-12 w-24 bg-[#1e293b] rounded" />

    </div>

  );

}