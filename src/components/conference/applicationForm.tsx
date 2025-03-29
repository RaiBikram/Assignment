"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  country: string;
  phoneNumber: string;
  email: string;
  expertise: string;
  agreedToTerms: boolean;
}

interface FormErrors {
  name?: string;
  country?: string;
  phoneNumber?: string;
  email?: string;
  expertise?: string;
  agreedToTerms?: string;
}

interface ApplicationFormProps {
  onClose: () => void;
}

export default function ApplicationForm({ onClose }: ApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    country: "",
    phoneNumber: "",
    email: "",
    expertise: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Prevent comma input for fields except email
    if (name !== "email" && value.includes(",")) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.agreedToTerms)
      newErrors.agreedToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowPreview(true);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Redirect or show success message
    setShowPreview(false);
    alert("Form submitted successfully!");
    onClose(); // Close the modal after successful submission
  };

  const handleCancel = () => {
    if (showPreview) {
      setShowPreview(false);
    } else {
      // Close the modal
      onClose();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      {!showPreview ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium text-black">Application Form</h1>
            <button
              onClick={onClose}
              className="text-cyan-500 hover:text-cyan-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="bg-blue-50 p-3 rounded mb-6 text-sm text-black">
            <p>
              Note: Please don't use any comma(,) in values of any columns
              except in email.
            </p>
          </div>

          <form onSubmit={handlePreview}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded text-black"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block mb-1 text-sm font-medium text-black"
              >
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="w-full p-2 border border-gray-300 rounded appearance-none text-black"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  <option value="Nepal">Nepal</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  {/* Add more countries as needed */}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              {errors.country && (
                <p className="text-red-500 text-xs mt-1 ">{errors.country}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block mb-1 text-sm font-medium"
              >
                Phone Number
              </label>
              <div className="flex">
                <div className="w-16 bg-gray-100 border border-gray-300 rounded-l p-2 flex items-center justify-between">
                  <span className="text-sm text-black">NP</span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="98..."
                  className="flex-1 p-2 border border-gray-300 text-black rounded-r"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1 ">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded text-black"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="expertise"
                className="block mb-1 text-sm font-medium text-black"
              >
                Expertise
              </label>
              <textarea
                id="expertise"
                name="expertise"
                placeholder="What are your expertise?"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded resize-none text-black"
                value={formData.expertise}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  className="mr-2 text-black"
                  checked={formData.agreedToTerms}
                  onChange={handleCheckboxChange}
                />
                <span className="text-sm text-black">
                  I agree to the terms and conditions
                </span>
              </label>
              {errors.agreedToTerms && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.agreedToTerms}
                </p>
              )}
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded w-full font-medium transition-colors "
              >
                Preview
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded w-full font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium text-black">
              Application Form Submission Preview
            </h1>
            <button
              onClick={() => setShowPreview(false)}
              className="text-cyan-500 hover:text-cyan-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-smt ext-black text-black">Name</p>
              <p className="font-medium text-black">{formData.name}</p>
            </div>

            <div>
              <p className="text-sm text-black">Country</p>
              <p className="font-medium text-black">{formData.country}</p>
            </div>

            <div>
              <p className="text-sm text-black">Phone Number</p>
              <p className="font-medium text-black">{formData.phoneNumber}</p>
            </div>

            <div>
              <p className="text-sm text-black">Email</p>
              <p className="font-medium text-black">{formData.email}</p>
            </div>

            <div>
              <p className="text-sm text-black">Expertise</p>
              <p className="font-medium whitespace-pre-wrap text-black">
                {formData.expertise}
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleSubmit}
              className= "bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded w-full font-medium transition-colors"
            >
              Submit
            </button>

            <button
              onClick={() => setShowPreview(false)}
              className="border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded w-full font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}