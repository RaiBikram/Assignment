import ObjectiveItem from "../ObjectiveItem";
import ObjectiveSection from "../ObjectiveSection";
import SectionHeading from "../SectionHeading";
import { TeamMember, TeamSection } from "../TeamSection";

// export const objectives = [
//   {
//     title: "Develop Leadership",
//     description:
//       "Equip youth with the tools and skills to address global challenges effectively.",
//   },
//   {
//     title: "Promote Collaboration",
//     description:
//       "Bridge gaps between governments, NGOs, businesses, and communities to achieve collective goals.",
//   },
//   {
//     title: "Advocate for Change",
//     description:
//       "Influence policies that prioritize sustainability, equity, and youth empowerment.",
//   },
//   {
//     title: "Enhance Education",
//     description:
//       "Provide access to resources, training, and knowledge-sharing platforms for young changemakers.",
//   },
//   {
//     title: "Foster Global Dialogue",
//     description:
//       "Cultivate international cooperation to ensure equitable solutions to global problems.",
//   },
// ];
export const teamMembers: TeamMember[] = [
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
const CouncilObjectives = () => {
  return (
    <div>
      <SectionHeading
        title="Mission"
        children="To empower youth globally to become catalysts for transformative change by fostering collaboration , building capacity, and championing sustainable soulutions to complex global chanllenges."
      />
      <ObjectiveSection heading="Objectives"  />
      <ObjectiveSection heading="Key Initiatives" />
      <TeamSection
        cardTitle="COUNCIL MEMBERS"
        heading="The Poople Behind The Mession"
        teamMembers={teamMembers}
        subheading=""
      />
    </div>
  );
};

export default CouncilObjectives;
