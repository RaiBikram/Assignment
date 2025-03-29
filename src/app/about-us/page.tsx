import ObjectivesList from "@/components/aboutUs/ObjectivesList";
import AboutOurTeam from "@/components/aboutUs/our-teams";
import TeamSection from "@/components/aboutUs/our-teams";
import AboutUsSection from "@/components/home/about-us-section";
import Footer from "@/components/Layout/footer";
import Navbar from "@/components/Layout/navbar";
import SectionHeading from "@/components/SectionHeading";

function page() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <AboutUsSection />

      <SectionHeading
        title="Discover the Global Act Council"
        children="The Global Act Council (GAC) is an international platform dedicated to uniting dynamic changemakers who tackle the world's most pressing challenges. Believing that youth are the cornerstone of sustainable development, GAC empowers individuals to take meaningful action through education, collaboration, and transformative programs. GAC bridges the gap between local issues and global solutions by fostering an environment where ideas flourish, voices are amplified, and initiatives are action-driven. With its specialized councils, international conferences, and collaborative ventures, GAC inspires and equips young leaders to contribute to a more equitable, peaceful, and sustainable world."
      />
      <SectionHeading
        title="Our Mission"
        children="To empower youth globally to become catalysts for transformative change by fostering collaboration, building capacity, and championing sustainable solutions to complex global challenges."
      />
      <SectionHeading
        title="Our Vision"
        children="A world where empowered youth lead the way toward peace, sustainability, and inclusivity through innovation, collaboration, and education."
      />
      <ObjectivesList />
      <AboutOurTeam />
      <Footer />
    </div>
  );
}

export default page;
