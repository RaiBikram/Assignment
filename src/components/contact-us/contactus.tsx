"use client"
import React, { useState } from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Left section with contact info */}
      <div className="w-full md:w-1/2 p-8 md:p-16 bg-white">
        <h1 className="text-4xl font-bold mb-2 text-black">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet consectetur. Volutpat porttitor dapibus mauris id. 
          Pellentesque diam eu dolor integer habitasse sed. Sit duis sed leo quisque cras 
          gravida fermentum. Augue sit eros felis diam quis in volutpat at.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-black">We're Here to Help</h2>
        
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet consectetur. Praesent aliquet in blandit cursus pulvinar dignissim malesuada. 
          Pellentesque viverra diam mattis arcu pellentesque sagittis malesuada a molestie. Volutpat sit mus velit 
          elementum. Iaculis fames nulla dui leo vel. Velit suspendisse sed nulla placerat sagittis vulputate.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <FiPhone className="text-blue-500 mr-4 " size={20} />
            <span className=" text-black">+1 (347) 321-0819</span>
          </div>
          
          <div className="flex items-center">
            <FiMapPin className="text-blue-500 mr-4" size={20} />
            <span className=" text-black">California, USA</span>
          </div>
          
          <div className="flex items-center">
            <FiMail className="text-blue-500 mr-4" size={20} />
            <span className="text-black">globalactcouncil.com</span>
          </div>
        </div>
      </div>
      
      {/* Right section with form */}
      <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-16">
        <div className="bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium mb-6">Get Started</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Your first name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Your last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <select className="p-2 border border-gray-300 rounded-l-md bg-white" defaultValue="NP">
                  <option value="NP">NP</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="CA">CA</option>
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full p-2 border border-gray-300 rounded-r-md"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;