// pages/volunteering.tsx or app/volunteering/page.tsx
import React from 'react';
import CurrentCard from "./CurrentCard";


export default function VolunteeringPage() {
  // Sample volunteer activities data
  const volunteerActivities = [
    {
      title: 'Volunteer activities',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.'
    },
    {
      title: 'Volunteer activities',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.'
    },
    {
      title: 'Volunteer activities',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.'
    },
    {
      title: 'Volunteer activities',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.'
    },
    {
      title: 'Volunteer activities',
      description: 'Lorem ipsum dolor sit amet consectetur. Enim a quam neque scelerisque sed justo eget. Diam enim pharetra est bibendum vitae morbi turpis tempus dolor.'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <CurrentCard
        activities={volunteerActivities} 
        heading="Current Job Opening" 
      />
    </main>
  );
}