import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="w-full bg-gradient-to-r from-transparent to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side with images */}
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Top left - Globe image (larger) */}
            <div className="col-span-2 row-span-2 bg-white rounded-lg p-4 shadow-md">
              <Image
                src="/about-us/globe-about-us.webp"
                alt="People on globe"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            
            {/* Top right - Social media collaboration */}
            <div className="col-span-2 bg-white rounded-lg p-4 shadow-md">
              <Image
                src="/about-us/front-desk.webp"
                alt="Social media collaboration"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </div>
            
            {/* Bottom right - Team collaboration */}
            <div className="col-span-2 bg-white rounded-lg p-4 shadow-md">
              <Image
                src="/about-us/growth.webp"
                alt="People collaborating"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </div>
            
            {/* Bottom left - Team working */}
            <div className="col-span-2 row-span-1 bg-white rounded-lg p-4 mt-auto shadow-md">
              <Image
                src="/about-us/socialmedia.webp"
                alt="Team working together"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-gray-900">About </span>
              <span className="text-blue-500">Us</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We are not just a council; we are a movement, mobilizing the next 
              generation of leaders to create impactful change across diverse 
              sectors.
            </p>
            
            <div className="absolute bottom-0 right-0  w-full h-1/3 bg-gradient-to-b from-transparent to-blue-100 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}