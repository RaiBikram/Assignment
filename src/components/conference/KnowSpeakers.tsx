import React from 'react'
import { TeamMember, TeamSection } from "../TeamSection"



function KnowSpeakers() {
      const teamMembers: TeamMember[] = [
        {
          id: 1,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
        {
          id: 2,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
        {
          id: 3,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
        {
          id: 4,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
        {
          id: 5,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
        {
          id: 6,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
        {
          id: 7,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
        {
          id: 8,
          name: "Rohan karki",
          title: "Managing Director",
          bio: "Lorem Ipsum has been the industry's standard dummy text ever since.",
          image: "/about-us/our-team/pp.webp",
        },
      ];
  return (
    <div>
   
        <TeamSection cardTitle="KNOW SPEAKERS" heading="Inspiring Minds, Global Leaders" subheading="     Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quod eveniet tenetur aut earum eligendi ullam consequuntur ad impedit porro. Nulla ipsam fuga harum animi inventore iste repudiandae consequatur eveniet?" teamMembers={teamMembers}/>
    </div>
  )
}

export default KnowSpeakers