"use client"
import React, { useState } from 'react';
import { FiChevronDown, FiX, FiPaperclip } from 'react-icons/fi';

interface ApplicationFormData {
  name: string;
  membershipType: string;
  country: string;
  phoneNumber: string;
  email: string;
  dob: string;
  citizenshipNo: string;
  suggestion: string;
  uploadedFile: File | null;
  agreeToTerms: boolean;
}

const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    membershipType: '',
    country: '',
    phoneNumber: '',
    email: '',
    dob: '',
    citizenshipNo: '',
    suggestion: '',
    uploadedFile: null,
    agreeToTerms: false
  });
  
  const [showAlert, setShowAlert] = useState(true);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, uploadedFile: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleCancel = () => {
    // Reset form or navigate away
    console.log('Form cancelled');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-black">Application Form</h2>
        <button className="text-gray-500 hover:text-gray-700" aria-label="Close form">
          <FiX />
        </button>
      </div>

      {showAlert && (
        <div className="bg-blue-50 border border-blue-100 text-blue-800 px-4 py-3 rounded mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">ℹ️</span>
            <p className="text-sm">Note: Please don't use any comma(,) in values of any columns except in email.</p>
          </div>
          <button 
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setShowAlert(false)}
            aria-label="Close alert"
          >
            <FiX size={16} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">
            Membership type
          </label>
          <div className="relative">
            <select
              id="membershipType"
              name="membershipType"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
              value={formData.membershipType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select your membership type</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <div className="relative">
            <select
              id="country"
              name="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select your country</option>
              <option value="np">Nepal</option>
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="uk">United Kingdom</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex">
            <select 
              className="px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-20"
              defaultValue="NP"
            >
              <option value="NP">NP</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="IN">IN</option>
            </select>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            DOB
          </label>
          <input
            id="dob"
            name="dob"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your date of birth"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="citizenshipNo" className="block text-sm font-medium text-gray-700">
            Citizenship No.
          </label>
          <input
            id="citizenshipNo"
            name="citizenshipNo"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your citizenship number"
            value={formData.citizenshipNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700">
            Suggestion
          </label>
          <textarea
            id="suggestion"
            name="suggestion"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Suggestions"
            value={formData.suggestion}
            onChange={handleInputChange}
          />
        </div>

        <div 
          className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:border-blue-500 transition-colors"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="hidden"
            accept=".csv"
            onChange={handleFileUpload}
          />
          <FiPaperclip className="mx-auto mb-2 text-blue-500" size={24} />
          <p className="text-sm font-medium">Click or Drag file to this area to upload</p>
          <p className="text-xs text-gray-500">Supports a single file with ".csv" extension</p>
          {fileName && (
            <p className="mt-2 text-sm text-blue-600">{fileName}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            id="agree-terms"
            name="agreeToTerms"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            checked={formData.agreeToTerms}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md focus:outline-none ${
              formData.agreeToTerms
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-blue-300 text-white cursor-not-allowed'
            }`}
            disabled={!formData.agreeToTerms}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;