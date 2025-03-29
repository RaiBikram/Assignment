"use client"
import Image from "next/image";
import React, { useState } from "react";
import PaymentForm from "./paymentMethod";


export const SupportGlobal = () => {
  const [isVisible, setIsVisible] = useState(false);
    
  const show = () => {
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-[#00AEEF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#00AEEF] w-full rounded-lg overflow-hidden">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h3 className="font-text-xl-medium text-primary-colorprimary-tintprimary-tint10 text-lg sm:text-xl">
                Support Global Change
              </h3>
              <h2 className="font-text-4xl-bold text-white text-2xl sm:text-3xl md:text-4xl">
                Fuel the Future of Global Impact
              </h2>
            </div>
            
            <p className="font-text-xl-regular text-white text-base sm:text-lg md:text-xl">
              Join us in advancing human rights, sustainability, and global
              collaboration by supporting our initiatives. Every donation helps
              us drive impactful change across communities worldwide.
            </p>
            
            <button 
              className="w-full sm:w-[200px] h-12 bg-primary-colorprimary-tintprimary-tint10 text-primary-colorprimary-shadesprimarry-shade00 font-bold rounded hover:opacity-90 transition-opacity bg-white text-[#00AEEF]"
              onClick={show}
            >
              Donate Now
            </button>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-text-colortext-tinttext-tint-09 rounded-t-lg lg:rounded-tl-none lg:rounded-l-none overflow-hidden border-none">
            <div className="p-4 sm:p-8 lg:p-12 h-full relative">
              <Image
                className="absolute w-full sm:w-[75%] lg:w-[580px] h-[60%] sm:h-[70%] lg:h-[402px] top-0 right-0 object-cover rounded-2xl"
                alt="Global impact initiatives"
                src="/globalsupport1.webp"
                width={600}
                height={600}
              />
              <Image
                className="absolute w-[45%] sm:w-[40%] lg:w-[290px] h-[45%] sm:h-[40%] lg:h-[268px] bottom-0 left-0 rounded-2xl"
                alt="Community support" 
                src="/globalsupport2.webp"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Donation Overlay/Modal */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
            <div className="p-4">
              <PaymentForm onCancel={hideModal} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};