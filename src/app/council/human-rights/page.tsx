import CouncilObjectives from "@/components/council/council";
import CoucilStories from "@/components/council/CouncilStories";
import HumanRightsPeacePage from "@/components/council/Environment";
import CouncilHome from "@/components/council/commonHomePage";
import Footer from "@/components/Layout/footer";
import Navbar from "@/components/Layout/navbar";
import ObjectiveItem from "@/components/ObjectiveItem";
import React from "react";
import HumanRightsSection from "@/components/council/human-rights";

type Props = {};

function page({}: Props) {
  return (
    <div>
      
      <Navbar />
      <HumanRightsSection/>
      <CouncilObjectives />
      <CoucilStories/>
      <HumanRightsPeacePage/>
      <Footer />
    </div>
  );
}

export default page;
