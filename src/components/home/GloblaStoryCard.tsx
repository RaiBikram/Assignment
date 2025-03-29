"use client"
import { BsCalendar, BsPeople, BsPlayFill } from "react-icons/bs";
import Image from 'next/image';

interface StoryCard {
    id: number;
    title: string;
    date: string;
    views: number;
    image: string;
    featured?: boolean;
  }
function StoryCard({ story }: { story: StoryCard  }) {
    return (
      <div className={`relative group overflow-hidden rounded-2xl ${story.featured ? 'row-span-2 col-span-2' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"/>
        <Image
          src={story.image} 
          alt={story.title}
      
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={600}
          height={600}
        />
        {story.featured && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">
              <BsPlayFill className="w-8 h-8 text-white" />
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
            <div className="flex items-center gap-1 ">
              <BsCalendar className="w-4 h-4" />
              <span>{story.date}</span>
            </div>
            <div className="flex items-center gap-1 w-fu">
              <BsPeople className="w-4 h-4" />
              <span>{story.views}</span>
            </div>
          </div>
          <h3 className="text-white font-medium leading-tight">
            {story.title}
          </h3>
        </div>
      </div>
    );
  }

  export default StoryCard