import React from 'react';

const events = [
  {
    id: 1,
    title: 'GAC2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenas sed sit magnis. Potenti luctus platea eget odio.',
    time: '09.59AM',
    date: '27th Jan 2025'
  },
  {
    id: 2,
    title: 'GAC2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenas sed sit magnis. Potenti luctus platea eget odio.',
    time: '09.59AM',
    date: '27th Jan 2025'
  },
  {
    id: 3,
    title: 'GAC2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenas sed sit magnis. Potenti luctus platea eget odio.',
    time: '09.59AM',
    date: '27th Jan 2025'
  }
];

function WhatHappening() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] p-8 flex justify-center">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#00A6FF] text-sm font-medium mb-2 text">WHAT'S HAPPENING</h2>
          <h1 className="text-3xl font-semibold mb-4 text-black">Mark Your Calendar</h1>
          <p className="text-gray-600">Explore key events and opportunities to engage with the Global Act Council</p>
        </div>

        {/* <div className="relative"> */}
          {/* Timeline line */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div> */}

          {/* Timeline dots
          <div className="absolute right-0 top-0 w-4 h-4 bg-[#00A6FF] rounded-full transform translate-x-1/2"></div> */}

          {/* Events */}
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="relative flex items-start">
                <div className="flex-1 bg-white rounded-lg shadow-sm p-6 mr-8">
                  <h3 className="text-[#00A6FF] font-medium mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="text-gray-900 font-medium">{event.time}</div>
                  <div className="text-gray-500 text-sm">{event.date}</div>
                </div>
           
              </div>
            ))}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default WhatHappening;