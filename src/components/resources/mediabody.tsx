"use client";

import { useState } from "react";
import { FaImages, FaFilm, FaThLarge } from "react-icons/fa";

const galleryItems = Array(9).fill({
  image: "https://images.unsplash.com/photo-1682687220742-aba19b51f9a8",
  category: "GAC2023"
}).map((item, index) => ({ ...item, id: index + 1 }));

const videoItems = Array(9).fill({
  video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  category: "Promo Video"
}).map((item, index) => ({ ...item, id: index + 1 }));

const promoItems = Array(9).fill({
  text: "Exclusive 50% Discount!",
  category: "Promotion"
}).map((item, index) => ({ ...item, id: index + 1 }));

export default function MediaBodyPage() {
  const [selectedTab, setSelectedTab] = useState("photos");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-4xl font-bold mb-8 text-center text-black">Gallery</h1> */}

        <div className="flex justify-center space-x-4 mb-8">
          <button onClick={() => setSelectedTab("photos")} className="flex items-center gap-2 p-2 bg-white rounded shadow">
            <FaImages /> Photos
          </button>
          <button onClick={() => setSelectedTab("videos")} className="flex items-center gap-2 p-2 bg-white rounded shadow">
            <FaFilm /> Videos
          </button>
          <button onClick={() => setSelectedTab("promos")} className="flex items-center gap-2 p-2 bg-white rounded shadow">
            <FaThLarge /> Promos
          </button>
        </div>

        {selectedTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="overflow-hidden shadow rounded-lg cursor-pointer">
                <img src={item.image} alt={item.category} className="w-full h-60 object-cover" />
                <div className="p-4 bg-gray-900 text-white">{item.category}</div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoItems.map((item) => (
              <div key={item.id} className="shadow rounded-lg overflow-hidden">
                <video controls className="w-full h-60">
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 bg-gray-900 text-white">{item.category}</div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "promos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promoItems.map((item) => (
              <div key={item.id} className="p-6 bg-yellow-200 rounded-lg shadow text-center text-lg font-semibold">
                {item.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
