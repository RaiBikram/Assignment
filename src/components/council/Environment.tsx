import React from "react";
import Image from "next/image";

const HumanRightsPeacePage: React.FC = () => {
  return (
    <div className="relative w-full  bg-white flex items-center justify-center p-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Human Rights,
            <br />
            <span className="text-[#00a3ff]">Peace and Security</span>
            <br />
            Council
          </h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur. Arcu tincidunt dui turpis in
            id. A sit cras purus scelerisque. Duis at vivamus morbi tristique.
            Viverra imperdiet nisl tincidunt sed ultrices augue aliquot in.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="relative">
          {/* Humans Rights Card */}
          <div className="absolute top-0 right-0 w-64 bg-[#4D5BA8] rounded-lg p-4 shadow-lg z-10">
            <div className="flex items-center space-x-3">
              <div>
                <Image
                  src="/api/placeholder/50/50"
                  alt="Human Rights Icon"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold">Humans Rights</h3>
              </div>
            </div>
          </div>

          {/* World Map Card */}
          <div className="absolute bottom-20 left-0 w-64 bg-white rounded-lg p-4 shadow-lg z-20">
            <Image
              src="/api/placeholder/250/150"
              alt="World Map"
              width={250}
              height={150}
              className="rounded-lg"
            />
          </div>

          {/* Peace Day Card */}
          <div className="absolute bottom-0 right-0 w-48 bg-[#00a3ff] rounded-lg p-4 shadow-lg z-30">
            <h3 className="text-white font-semibold mb-2">Peace Day</h3>
            <p className="text-white text-sm">September 21st</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanRightsPeacePage;
