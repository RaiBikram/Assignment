// components/ValuesSection.tsx
import React from 'react';
import { FaUsers, FaLightbulb, FaGlobeAmericas, FaShieldAlt, FaBolt, FaFire } from 'react-icons/fa';

// ValueCard component
interface ValueCardProps {
  title: string;
  icon: React.ComponentType<{ className: string }>;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="bg-blue-500 h-12 w-12 flex items-center justify-center rounded-lg mb-4">
        <Icon className="text-white text-xl" />
      </div>
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Enim parturient bibendum eu turpis integer at. Felis
        pellentesque ac donec luctus malesuada commodo dictum leo neque
        lectus sagittis urna dignissim sit in morbi eget consequat. Enim elit sed ut tellus tristique.
      </p>
    </div>
  );
};

const ValuesSection = () => {
  // Data for the cards
  const valueCards = [
    { title: 'Collaboration', icon: FaUsers },
    { title: 'Innovation', icon: FaLightbulb },
    { title: 'Sustainability', icon: FaGlobeAmericas },
    { title: 'Integrity', icon: FaShieldAlt },
    { title: 'Empowerment', icon: FaBolt },
    { title: 'Leadership', icon: FaFire }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-500 uppercase text-sm font-medium tracking-wider">OUR VALUES</p>
        <h2 className="text-3xl font-bold mt-2 mb-6">The Core of Who We Are</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Amet cras in ipsum elit fringilla mattis et nisi
          bibendum. Morbi ut in nec tellus. Aliquet bibendum metus felis vestibulum venenatis
          parturient. Orci suscipit erat dignissim vitae et integer enim mauris nec.
        </p>
      </div>

      {/* Values Grid - Simple 3x2 grid with identical cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {valueCards.map((card) => (
          <ValueCard 
            key={card.title} 
            title={card.title} 
            icon={card.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;