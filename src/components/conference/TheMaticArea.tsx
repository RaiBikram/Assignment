"use client";

import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function ThematicAreas() {
  const thematicAreas = [
    {
      title: "Title for thematic area",
      description:
        "Exploring cutting-edge mobile technologies and their impact on digital transformation.",
      image: "/conference/payment.webp",
    },
    {
      title: "Digital Security",
      description:
        "Advanced security solutions protecting your digital assets and personal information.",
      image: "/conference/payment.webp",
    },
    {
      title: "Smart Integration",
      description:
        "Seamless integration of smart devices for enhanced connectivity and efficiency.",
      image: "/conference/payment.webp",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure enabling business growth and innovation.",
      image: "/conference/payment.webp",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Intelligent systems that learn and adapt to optimize your business processes.",
      image: "/conference/payment.webp",
    },
    {
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights for informed decision making.",
      image: "/conference/payment.webp",
    },
  ];

  return (
    <main className=" bg-gradient-to-b from-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-sky-500 font-semibold tracking-wide uppercase mb-3">
            THEMATIC AREA
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Explore Our Key Themes
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover innovative solutions across our key thematic areas,
            designed to transform your digital experience and drive business
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thematicAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full h-48">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3} // Load the first 3 images with priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <button className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-colors">
                  Learn More
                  <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}