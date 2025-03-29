import { TeamMember, TeamSection } from "../TeamSection";

function OurTeamSections() {
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
        {/* GAC Members  */}
      <TeamSection
        teamMembers={teamMembers} cardTitle="Our Team"
        heading="GAC Members"
        subheading="Our team of global leaders, advisors, and collaborators is dedicated to advancing our mission."
      />
      {/* Inter national teams */}
      <TeamSection
        teamMembers={teamMembers} cardTitle="Our Team"
        heading="International Teams"
        subheading="Our team of global leaders, advisors, and collaborators is dedicated to advancing our mission."
      />
      {/* Advisory Teams  */}
      <TeamSection
        teamMembers={teamMembers} cardTitle="Our Team"
        heading="Advisory Teams"
        subheading="Our team of global leaders, advisors, and collaborators is dedicated to advancing our mission."
      />
      {/* Our Country Directors */}
      <TeamSection
        teamMembers={teamMembers}  cardTitle="Our Team"
        heading="Our Country Directors"
        subheading="Our team of global leaders, advisors, and collaborators is dedicated to advancing our mission."
      />
    </div>
  );
}

export default OurTeamSections;
