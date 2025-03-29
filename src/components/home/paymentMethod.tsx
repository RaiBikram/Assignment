"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';

const PaymentForm = ({ onCancel }: { onCancel: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    amount: '',
    remark: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: e.target.type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle payment processing logic here
    // You might want to call an API endpoint to process the payment
  };

  const handleCancel = () => {
    console.log('Form canceled');
    // Call the passed onCancel function to close the modal
    if (onCancel) onCancel();
  };

  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px] text-[#000000] font-medium ">Payment Form</h2>
        <button 
          className="text-gray-500 hover:text-gray-700"
          onClick={handleCancel}
        >
          <X size={20} />
        </button>
      </div>

      <div className="bg-blue-100 p-3 rounded-md mb-4">
        <p className="text-sm text-[#000000] ">
          Note: Please don't use any comma(,) in values of any columns except in email.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[#5F6774]"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1 text-[#5F6774]">
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                name="country"
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none text-[#5F6774]"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>Select your country</option>
                <option value="np">Nepal</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="in">India</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ">
              Phone Number
            </label>
            <div className="flex">
              <div className="flex items-center border border-gray-300 rounded-l-md px-3 bg-gray-50">
                <span className="text-sm text-[#5F6774]">NP</span>
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="98..."
                className="flex-1 border border-gray-300 border-l-0 rounded-r-md px-3 py-2 text-[#5F6774]"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[#5F6774]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Amount"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[#5F6774]"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="remark" className="block text-sm font-medium text-gray-700 mb-1">
              Remark
            </label>
            <input
              type="text"
              id="remark"
              name="remark"
              placeholder="Remark"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-[#5F6774]"
              value={formData.remark}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded "
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Pay with Paypal
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;