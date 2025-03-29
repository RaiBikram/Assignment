
import { TeamMember, TeamSection } from "../TeamSection"



function AboutOurTeam() {
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
  ]
  return (
    <div><TeamSection cardTitle="Our Team" teamMembers={teamMembers} heading="The Poeople Behind the Mission" subheading="Our team of global leaders, advisors, and collaborators is dedicated to advancing our mission."/></div>
  )
}

export default AboutOurTeam