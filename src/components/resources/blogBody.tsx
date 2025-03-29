"use client";

import { FiGlobe, FiClock, FiArrowRight } from "react-icons/fi";

interface NewsItem {
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  thumbnail: string;
}

const newsItems: NewsItem[] = Array(9).fill({
  category: "Global Act",
  readTime: "3 min read",
  title: "Lorem Ipsum has been the industry's standard.",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  author: {
    name: "Rohan karki",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
  },
  thumbnail:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
});

export default function BlogCard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Latest News</h1>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            View All <FiArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    <FiGlobe className="w-3 h-3" />
                    {item.category}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <FiClock className="w-3 h-3 mr-1" />
                    {item.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-white">
                    <img
                      src={item.author.image}
                      alt={item.author.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {item.author.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      Posted just now
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
