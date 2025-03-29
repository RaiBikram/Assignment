import React from 'react';
// import { BsCalendar, BsPeople, BsPlayFill } from 'react-icons/bs';
import StoryCard from "./GloblaStoryCard";


interface StoryCardProps {
  id: number;
  title: string;
  date: string;
  views: number;
  image: string;
  featured?: boolean;
}

const stories: StoryCardProps[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur. Dui platea pellentesque in nunc semper amet non eleifend suscipit.",
    date: "27th Jan 2024",
    views: 199,
    image: "/ourstory1.webp",
    featured: true
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "27th Jan 2024",
    views: 199,
    image: "/ourstory2.webp"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "27th Jan 2024",
    views: 199,
    image: "/ourstory3.webp"
  }
];



function GlobalStories() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium tracking-wider text-blue-500 uppercase mb-3">
            GLOBAL STORIES
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Members, Our Stories
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Non eget feugiat sit nulla. Faucibus turpis duis in gravida sagittis. Varius at nunc volutpat ipsum. Ipsum vitae adipiscing non volutpate vitae tristique ultricies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlobalStories;