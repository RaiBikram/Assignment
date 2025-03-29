import Image from "next/image"
import React from "react"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

export interface TeamMember {
  id: number
  name: string
  title: string
  bio: string
  image: string
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
  heading:string;
  subheading:string;
  cardTitle:string
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers, heading, subheading , cardTitle}) => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ">
      {/* Background dots pattern - top left */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={`dot-tl-${i}`} className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          ))}
        </div>
      </div>

      {/* Background dots pattern - bottom right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={`dot-br-${i}`} className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-cyan-500 font-medium uppercase tracking-wider mb-2">{cardTitle}</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-black" >{heading}</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          {subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1"
          >
            <div className="p-4">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="font-semibold text-lg text-black">{member.name}</h3>
                <p className="text-cyan-500">{member.title}</p>
                <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
              </div>
              <div className="flex justify-center mt-4 space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-12">
        <button className="border border-gray-300 px-8 py-2 rounded hover:bg-gray-50 transition-colors text-black">
          View all
        </button>
      </div> */}
    </section>
  )
}
