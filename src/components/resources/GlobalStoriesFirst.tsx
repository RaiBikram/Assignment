"use client";

import { FaShare } from "react-icons/fa";

export default function GlobalStoriesFirst() {
  return (
    <main className=" bg-gradient-to-br from-white to-blue-50 pb-40">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
              Global <span className="text-blue-500">Stories</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Curabitur sed non quis quam erat dui
              cursus suspendisse. Enim amet posuere aliquot pharetra. Aliquam amet non tellus
              arcu vitae eleifend aliquam. Vitae nisi leo non cras.
            </p>
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Want to Share your story with us?
              </h3>
              <button className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                <FaShare className="mr-2 h-4 w-4" />
                Share Now
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div className="absolute top-[-2rem] right-[-2rem] w-48 h-auto">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            <div className="absolute bottom-[-2rem] left-[-2rem] w-48 h-auto">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Remote team"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}