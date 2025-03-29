"use client";

import { useState } from 'react';
import { BsFillPlayFill } from "react-icons/bs";
import { FaCalendarAlt, FaImage } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Link from "next/link";

interface Story {
  id: number;
  date: string;
  views: number;
  title: string;
  image: string;
  featured?: boolean;
  type: 'global' | 'national';
}

const stories: Story[] = [
  {
    id: 1,
    date: "27th Jan 2024",
    views: 199,
    title: "Global markets react to unprecedented technological breakthrough",
    image: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    type: 'global'
  },
  {
    id: 2,
    date: "27th Jan 2024",
    views: 199,
    title: "International climate summit reaches historic agreement",
    image: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2940&auto=format&fit=crop",
    type: 'global'
  },
  {
    id: 3,
    date: "27th Jan 2024",
    views: 145,
    title: "Local infrastructure project sets new sustainability standards",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    type: 'national'
  },
  {
    id: 4,
    date: "27th Jan 2024",
    views: 167,
    title: "National education reform promises innovative learning approaches",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2940&auto=format&fit=crop",
    type: 'national'
  },
  {
    id: 5,
    date: "27th Jan 2024",
    views: 132,
    title: "Healthcare system undergoes major digital transformation",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2940&auto=format&fit=crop",
    type: 'national'
  },
  {
    id: 6,
    date: "28th Jan 2024",
    views: 342,
    title: "Revolutionary AI breakthrough transforms medical diagnosis globally",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    type: 'global'
  },
  {
    id: 7,
    date: "28th Jan 2024",
    views: 256,
    title: "Space exploration milestone: First permanent lunar base announced",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2940&auto=format&fit=crop",
    type: 'global'
  },
  {
    id: 8,
    date: "28th Jan 2024",
    views: 198,
    title: "Global renewable energy initiative surpasses major milestone",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop",
    type: 'global'
  },
  {
    id: 9,
    date: "29th Jan 2024",
    views: 287,
    title: "Breakthrough in quantum computing reshapes global technology landscape",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop",
    type: 'global'
  },
  {
    id: 10,
    date: "29th Jan 2024",
    views: 221,
    title: "International coalition launches ambitious ocean cleanup project",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2940&auto=format&fit=crop",
    type: 'global'
  }
];

export default function GlobalStoriesBody() {
  const [activeTab, setActiveTab] = useState<'global' | 'national' | 'submit'>('global');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  });

  const filteredStories = stories.filter(story => story.type === activeTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ title: '', description: '', image: '' });
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="border-b pb-4">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('global')}
                className={`text-sm font-medium transition-colors text-black${
                  activeTab === 'global' 
                    ? 'text-primary border-b-2 border-primary pb-4 -mb-4' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Global Stories
              </button>
              <button 
                onClick={() => setActiveTab('national')}
                className={`text-sm font-medium transition-colors text-black ${
                  activeTab === 'national' 
                    ? 'text-primary border-b-2 border-primary pb-4 -mb-4' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                National Stories
              </button>
              <button 
                onClick={() => setActiveTab('submit')}
                className={`text-sm font-medium transition-colors text-black${
                  activeTab === 'submit' 
                    ? 'text-primary border-b-2 border-primary pb-4 -mb-4' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Submit your Stories
              </button>
            </div>
          </div>
        </nav>

        {activeTab !== 'submit' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              story.featured ? (
                <div key={story.id} className="col-span-full lg:col-span-2 relative group">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-0 p-6 text-white">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <FaCalendarAlt className="w-4 h-4" />
                            <span className="text-sm">{story.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <AiOutlineEye className="w-4 h-4" />
                            <span className="text-sm">{story.views}</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{story.title}</h2>
                        <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2">
                          <BsFillPlayFill className="w-4 h-4" />
                          <span className="text-sm font-medium">Watch Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={story.id} className="relative group">
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-0 p-4 text-white">
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="flex items-center space-x-2">
                            <FaCalendarAlt className="w-4 h-4" />
                            <span className="text-sm">{story.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <AiOutlineEye className="w-4 h-4" />
                            <span className="text-sm">{story.views}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold">{story.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Submit Your Story</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-card-foreground mb-2">
                    Story Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your story title"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-card-foreground mb-2">
                    Story Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Write your story description"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-card-foreground mb-2">
                    Image URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter image URL"
                      required
                    />
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      <FaImage className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md font-medium"
                >
                  Submit Story
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}