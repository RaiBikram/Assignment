import React from "react";

const OverlappingDivsGrid = () => {
  return (
    <div className="bg-blue-100 grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-md h-64 relative p-4 rounded-lg">
      {/* Humans Rights Card - Blue Background  */}
      <div className="col-start-1 col-span-2 row-start-1 row-span-2 bg-[#4A7FBF] rounded-lg shadow-md z-10 transform -rotate-2 flex items-center justify-center">
        <img src="/path-to-human-rights-image.jpg" alt="Human Rights" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Peace Day Card - Teal Background  */}
      <div className="col-start-2 col-span-2 row-start-2 row-span-2 bg-[#009EA0] rounded-lg shadow-md z-20 transform rotate-2 flex items-center justify-center">
        <img src="/path-to-peace-day-image.jpg" alt="Peace Day" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* World Map Card - Light Blue Background */}
      <div className="col-start-1 col-span-2 row-start-2 row-span-2 bg-[#A7C7E7] rounded-lg shadow-md z-30 transform -rotate-1 flex items-center justify-center">
        <img src="/path-to-world-map-image.jpg" alt="World Map" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default OverlappingDivsGrid;
