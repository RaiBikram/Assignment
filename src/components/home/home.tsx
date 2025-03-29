import React from "react";
import Image from "next/image";

const GlobalMovementPage = () => {
  return (
    <div className="w-full pb-20 bg-[#FFFFFF]">
      {/* Main content wrapper */}
      <div className="container mx-auto  py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Left content section */}
          <div className="lg:w-1/2 z-10">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-800">Empowering </span>
              <span className="text-[#00AEEF]">Change</span>
              <span className="text-gray-800">,</span>
            </h1>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">
              Globally and Locally
            </h1>

            <p className="text-gray-600 mb-8">
              Join the Global Movement to Address Today's Challenges
              <br />
              and Build a Sustainable Future.
            </p>

            <div className="flex space-x-4 mb-12">
              <button className="bg-[#00AEEF] text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
                Join the Movement
              </button>
              <button className="bg-white text-gray-800 px-6 py-2 rounded border border-gray-300 hover:bg-gray-100 transition duration-300">
                Support Us
              </button>
            </div>

            {/* Map and meeting section */}
            <div className="flex space-x-4 mb-6 w-full min-h-20">
              <div className="w-[300px] relative">
                <Image
                  src="/international.webp"
                  alt="World Map"
                  width={600}
                  height={200} // Reduced height from 200 to 100
                  className="object-cover h-[200px]" // Added explicit height control
                />
              </div>
              {/* Commented div remains as is */}
            </div>

       
          </div>

          {/* Right section with globe and people */}
          <div className=" lg:w-1/2 absolute top-36 right-0 mt-8 lg:mt-0">
            {/* Blue background rectangle */}
            <div className="absolute top-0 right-0 w-[427px] min-h-[748px] lg:w-1/2 bg-[#00AEEF]"></div>

            {/* Globe with people image */}
            <div className="relative  w-full h-full top-[240px] left-[120px]">
              <Image
                src="/globe.webp"
                alt="Globe with people"
                width={600}
                height={600}
                className="object-contain w-[764px] h-[518px] "
              />
            </div>

            {/* Statistics at the bottom */}
            <div className="absolute justify-center -bottom-70  left-0  flex gap-4 z-9 right-40">
              <div className="shadow text-center bg-white  rounded-sm h-[72px] w-[160px]">
                <h3 className="text-[#00AEEF] text-[20px] font-bold ">180K+</h3>
                <p className="text-gray-600 text-[12px]">Member</p>
              </div>
              <div className="shadow text-center bg-white rounded-sm h-[72px] w-[160px]">
                <h3 className="text-[#00AEEF] text-[20px] font-bold ">2000+</h3>
                <p className="text-gray-600 text-[12px]">Collaborations</p>
              </div>
              <div className="shadow text-center bg-white rounded-sm h-[72px] w-[160px]">
                <h3 className="text-[#00AEEF] text-[20px] font-bold ">180K+</h3>
                <p className="text-gray-600 text-[12px]">Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMovementPage;
