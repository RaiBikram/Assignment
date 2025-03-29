import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

interface VolunteerCardProps {
  activities: Array<{
    title: string;
    description: string;
  }>;
  heading?: string;
}

const VolunteerCard = ({
  activities,
  heading 
}: VolunteerCardProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-black">{heading}</h2>
      <div className="bg-white rounded-lg shadow-sm">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`flex items-start py-6 ${
              index < activities.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="flex-shrink-0 mr-4">
              <div className="bg-blue-500 rounded-lg p-2">
                <FaHandHoldingHeart className="text-white text-xl" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-1 text-black">{activity.title}</h3>
              <p className="text-gray-600 pr-4">{activity.description}</p>
            </div>
            <div className="flex-shrink-0 ml-auto">
              <button className="border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50 transition-colors text-black">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerCard;
