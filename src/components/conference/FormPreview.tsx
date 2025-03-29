
import React from 'react';

interface FormData {
  name: string;
  country: string;
  phoneNumber: string;
  email: string;
  expertise: string;
  agreedToTerms: boolean;
}

interface PreviewFormProps {
  formData: FormData;
  onSubmit: () => void;
  onBack: () => void;
}

const PreviewForm: React.FC<PreviewFormProps> = ({ formData, onSubmit, onBack }) => {
  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">Application Form Submission Preview</h1>
        <button 
          onClick={onBack}
          className="text-cyan-500 hover:text-cyan-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-gray-600">Name</p>
          <p className="font-medium">{formData.name}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-600">Country</p>
          <p className="font-medium">{formData.country}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-600">Phone Number</p>
          <p className="font-medium">{formData.phoneNumber}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-600">Email</p>
          <p className="font-medium">{formData.email}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-600">Expertise</p>
          <p className="font-medium whitespace-pre-wrap">{formData.expertise}</p>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded w-full font-medium transition-colors"
        >
          Submit
        </button>
        
        <button
          onClick={onBack}
          className="border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded w-full font-medium transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PreviewForm;