// components/MembershipJourney.tsx
import React from 'react';
import { FiFileText, FiEdit, FiUpload, FiCheckCircle, FiCheckSquare, FiLink } from 'react-icons/fi';

const MembershipJourney: React.FC = () => {
  const steps = [
    {
      title: 'Check Eligibility',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.',
      icon: <FiCheckSquare className="text-blue-500" size={24} />
    },
    {
      title: 'Complete the Application Form',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.',
      icon: <FiEdit className="text-blue-500" size={24} />
    },
    {
      title: 'Submit Supporting Documents',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.',
      icon: <FiUpload className="text-blue-500" size={24} />
    },
    {
      title: 'Application Review',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.',
      icon: <FiFileText className="text-blue-500" size={24} />
    },
    {
      title: 'Receive Confimation',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.',
      icon: <FiCheckCircle className="text-blue-500" size={24} />
    },
    {
      title: 'Begin your Membership Journey',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.',
      icon: <FiLink className="text-blue-500" size={24} />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Your Membership Application Journey</h1>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex items-start p-6 border-b border-gray-200"
          >
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 flex items-center justify-center">
                {step.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">{step.title}</h3>
              <p className="text-gray-600 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipJourney;