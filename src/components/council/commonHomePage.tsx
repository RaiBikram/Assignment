"use client";

export type IDataType = {
  title1: string;
  title2: string;
  body: string;
  image1: string;
  image2: string;
  image3: string;
}

export default function CommonHome({
  title1 = "Human Rights",
  title2 = "",
  body = "We are dedicated to serving our community through collaborative efforts and innovative solutions. Join us in making a difference in our local area and beyond.",
  image1 ="/council/1.webp",
  image2 = "/council/2.webp",
  image3 = "/council/3.webp"
}: IDataType) {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            {title1},
            <span className="block">{title2}</span>
            <span className="text-blue-500">Council</span>
          </h1>

          <p className="text-muted-foreground text-lg text-gray-600">
            {body}
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600 rounded-lg p-4 transform hover:scale-105 transition-transform">
              <img
                src={image1}
                alt="Council image 1"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-teal-500 rounded-lg p-4 transform hover:scale-105 transition-transform mt-8">
              <img
                src={image2}
                alt="Council image 2"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-indigo-500 rounded-lg p-4 transform hover:scale-105 transition-transform">
              <img
                src={image3}
                alt="Council image 3"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}