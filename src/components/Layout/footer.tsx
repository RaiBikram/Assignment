import Image from "next/image";
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className=" bg-gradient-to-br from-blue-50 to-blue-100">
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap items-center gap-2">
                  <Image
                    src="/navLogo.webp"
                    alt="Global Act Council Logo"
                    width={600}
                    height={600}
                    className="h-16 w-auto"
                  />
                  <div className="text-sm font-medium"></div>
                </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6">Quick Link</h3>
              <ul className="space-y-4">
                <li><a href="/about-us" className="text-gray-500 hover:text-gray-900 text-sm">About us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Resources</a></li>
                <li><a href="/opportunity" className="text-gray-500 hover:text-gray-900 text-sm">Opportunity</a></li>
                <li><a href="/resources/blogs" className="text-gray-500 hover:text-gray-900 text-sm">Blogs</a></li>
                <li><a href="contact-us" className="text-gray-500 hover:text-gray-900 text-sm">Contact Us</a></li>
              </ul>
            </div>

            {/* Conference */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6">Conference</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">GAC2025</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">GAC2024</a></li>
              </ul>
            </div>

            {/* Councils */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6">Councils</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Human Rights, Peace & Security Council</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Environment & Biodiversity Council</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">SDGs Council</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Science & Technology Council</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">International Affairs & Diplomacy Council</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Trade & Economy Council</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Youth & Education Council</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Information & Communication Council</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="/about-us" className="text-gray-500 hover:text-gray-900 text-sm">About us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Partners</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Customers</a></li>
                <li><a href="/contact-us" className="text-gray-500 hover:text-gray-900 text-sm">Contact us</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright and Social Links */}
          <div className=" pt-8 text-center">
            <p className="text-sm text-gray-500 mb-6">© 2024 GAC. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;