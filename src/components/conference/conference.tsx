"use client";

import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import ApplicationForm from "./applicationForm";


export default function Conference() {
  const [isVisible, setIsVisible] = useState(false);
        
  const show = () => {
    setIsVisible(true);
  };
    
  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <main className=" bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section (Now Left) */}
          <div className="relative lg:order-1 order-2">
            <div className="relative z-10 py-8 -mr-10">
              <img
                src="/conference/1.webp"
                alt="Main conference"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-16 -right-14">
                <img
                  src="/conference/3.webp"
                  alt="Secondary conference"
                  className="w-60 h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                />
              </div>
              <div className="absolute -top-16 -right-20">
                <img
                  src="/conference/2.webp"
                  alt="Tertiary conference"
                  className="w-80 h-40 object-cover rounded-2xl shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Content Section (Now Right) */}
          <div className="space-y-10 lg:order-2 order-1 pl-20">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                GAC<span className="text-blue-500 ml-2">2025</span>
              </h1>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Diam sed amet elit tincidunt dapibus. Amet at nisi nullam odio pellentesque vestibulum imperdiet.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-700">
                <BiTimeFive className="h-5 w-5 text-blue-500" />
                <span>09:59AM</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <IoLocationSharp className="h-5 w-5 text-blue-500" />
                <span>27th Jan, 2025 | Singapore Expo Center</span>
              </div>
            </div>

            <button 
              onClick={show}
              className="bg-[#00AEEF] hover:bg-blue-600 text-white px-8 py-3 text-lg rounded-sm transition-colors duration-200 font-semibold"
            >
              Apply for Conference
            </button>

            <div className="pt-8">
              <p className="text-gray-600 mb-4">Time Left</p>
              <div className="flex gap-4">
                {[
                  { value: "120", label: "Days" },
                  { value: "11", label: "Hours" },
                  { value: "11", label: "Minutes" },
                  { value: "11", label: "Seconds" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 text-center min-w-[80px]"
                  >
                    <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ApplicationForm onClose={hideModal} />
        </div>
      )}
    </main>
  );
}