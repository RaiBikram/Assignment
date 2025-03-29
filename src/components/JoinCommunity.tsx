"use client";

import Link from "next/link";
import { title } from "process";

export default function JoinCommunity({ title, discreption }: { title: string, discreption: string }) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("/joionOurCommunity.webp")`,
        }}
      ></div>

      <div className="relative z-10 py-16 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
         {title}
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto">
     {discreption}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-2 rounded-md transition-colors duration-200">
          <Link href="#">Join Our Community</Link>
        </button>
      </div>
    </div>
  );
}
