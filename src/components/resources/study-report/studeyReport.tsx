"use client";

import Image from "next/image";
import { ClipboardList } from "lucide-react";

export default function StudiesReportFirst() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute right-0 top-0 w-[600px] h-[400px]">
        <div className="absolute right-0 top-0 w-72 h-32 bg-blue-500 rounded-bl-[100px]" />
        <div className="absolute right-0 top-40 w-48 h-32 bg-blue-400 rounded-l-[50px]" />
        <div className="absolute right-0 top-80 w-96 h-32 bg-blue-600 rounded-tl-[100px]" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ClipboardList className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Studies & Reports
              </h1>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Habitasse integer eu velit
              cursus urna eget felis. Morbi donec aliquet condimentum
              pellentesque pretium eget. Ut mi vestibulum risus id luctus id eu
              nisi. Lectus pulvinar id quis pellentesque urna feugiat dolor.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative">
            <div className="relative w-full h-[400px]">
              <Image
                src="/navLogo.webp"
                alt="Studies and Reports Illustration"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Floating Elements */}
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-xl" />
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
