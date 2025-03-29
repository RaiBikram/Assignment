// components/VolunteeringJobSection.tsx
import React from 'react';
import Link from 'next/link';

const VolunteeringJobSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-3">Looking for Volunteering or Job</h2>
        
        <p className="text-gray-700 mb-8">
          Discover the benefits of being part of the Global Act Council and how you can 
          contribute to meaningful change
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/volunteering" className="inline-block px-6 py-3 border border-gray-300 bg-white rounded hover:bg-gray-50 transition-colors text-black">
            Volunteering opportunities
          </Link>
          
          <Link href="/careers" className="inline-block px-6 py-3 border border-gray-300 bg-white rounded hover:bg-gray-50 transition-colors  text-black">
            View current openings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteeringJobSection;