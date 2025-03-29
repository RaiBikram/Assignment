"use client";

import Image from "next/image";
import { FiClock, FiUser } from "react-icons/fi";

interface BlogPost {
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    category: "Global Act",
    readTime: "3 min read",
    title: "Lorem Ipsum has been the industry's standard.",
    description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Rohan kanki",
    date: "Posted just now",
  },
  {
    category: "Global Act",
    readTime: "3 min read",
    title: "Lorem Ipsum has been the industry's standard.",
    description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Rohan kanki",
    date: "Posted just now",
  },
  {
    category: "Global Act",
    readTime: "3 min read",
    title: "Lorem Ipsum has been the industry's standard.",
    description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Rohan kanki",
    date: "Posted just now",
  },
];

export default function LatestNewsBlogs() {
  return (
    <div className="min-h-screen bg-white py-16 ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h3 className="text-[#00A9FF] text-sm font-medium uppercase tracking-wider mb-4">
            LATEST NEWS AND BLOGS
          </h3>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Know More About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Lorem ipsum dolor sit amet consectetur. Non eget feugiat at nulla. Faucibus turpis duis
            in gravida sagittis. Varius at nunc volutpat ipsum. Ipsum vitae adipiscing non vulputate
            vitae tristique ultrices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.08)] overflow-hidden "
            >
              <div className="relative h-48 ">
                <Image
                  src="/knowmoreus.webp"
                  fill
                  alt="Blog post"
                  className="object-cover w-[380px] h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00A9FF] text-sm font-medium">{post.category}</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FiClock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{post.description}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <FiUser className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#00A9FF] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}