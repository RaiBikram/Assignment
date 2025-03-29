import React from "react";

const CalendarComponent = () => {
  const events = [
    {
      id: "1",
      title: "GAC2025",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenas sed sit magnis. Potenti luctus platea eget odio.",
      time: "09.59AM",
      date: "27th Jan,2025",
    },
    {
      id: "2",
      title: "GAC2025",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenas sed sit magnis. Potenti luctus platea eget odio.",
      time: "09.59AM",
      date: "27th Jan,2025",
    },
    {
      id: "3",
      title: "GAC2025",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mauris leo posuere et lectus. Adipiscing porttitor accumsan diam eget nisi sagittis. Est sed maecenas sed sit magnis. Potenti luctus platea eget odio.",
      time: "09.59AM",
      date: "27th Jan,2025",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-gradient-to-b from-white to-sky-50 rounded-lg">
      <div className="text-center mb-8">
        <div className="text-sky-500 font-medium text-sm mb-2">
          WHAT'S HAPPENING
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Mark Your Calendar</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore key events and opportunities to engage with the Global Act
          Council
        </p>
      </div>

      <div className="relative">
        {/* Timeline indicator */}
        <div className="absolute top-0 bottom-0 right-1/2 md:right-1/4 w-px bg-gray-200"></div>
        <div className="absolute top-0 right-1/2 md:right-1/4 w-6 h-6 rounded-full bg-sky-400 -translate-x-1/2"></div>

        {/* Events */}
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 ml-0 md:ml-4 mb-6">
                <div className="text-sky-500 font-semibold mb-2">
                  {event.title}
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="text-gray-900 font-bold">{event.time}</div>
                <div className="text-gray-600 text-sm">{event.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
