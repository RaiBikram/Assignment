// import OverlappingDivsGrid from "@/components/card";
// import ApplicationForm from "@/components/conference/applicationForm";
// import ConferenceFormPreview from "@/components/conference/FormPreview";
// import MembershipForm from "@/components/membership/membershipForm";
import AboutUsSection from "@/components/home/about-us-section";
import MembershipBanner from "@/components/home/become-member";
import { ContactUsComponent } from "@/components/home/contaxt-us";
import GlobalStories from "@/components/home/global-stories";
import GlobalMovementPage from "@/components/home/home";
import LatestNewsBlogs from "@/components/home/latest-news-blogs";
import GlobalActCouncil from "@/components/home/our-councils";
import { SupportGlobal } from "@/components/home/support-global-change";

import WhatHappening from "@/components/home/whats-happening";

import Footer from "@/components/Layout/footer";
import Navbar from "@/components/Layout/navbar";


import { TeamMember, TeamSection } from "@/components/TeamSection";

export default function Home() {
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
    <div className="flex flex-col min-h-screen bg-white pb-40">
      <Navbar />
      {/* Blue bg box */}

      <GlobalMovementPage />
      <AboutUsSection />
      <GlobalActCouncil />
      <WhatHappening />
      <MembershipBanner />
      <GlobalStories />
      <LatestNewsBlogs />
      <SupportGlobal />
      <ContactUsComponent />

      <Footer />
      {/* <TeamSection
        teamMembers={teamMembers}
        heading={"The People Behind the Mission"}
        subheading={
          " Our team of global leaders, advisors, and collaborators is dedicated to advancing our mission."
        }
        cardTitle="Our Team"
      /> */}
      {/* <MembershipForm />
      <ApplicationForm /> */}
      
    </div>
  );
}
