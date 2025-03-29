import CouncilObjectives from "@/components/council/council";
import CoucilStories from "@/components/council/CouncilStories";
import HumanRightsPeacePage from "@/components/council/Environment";
import CouncilHome from "@/components/council/commonHomePage";
import Footer from "@/components/Layout/footer";
import Navbar from "@/components/Layout/navbar";
import ObjectiveItem from "@/components/ObjectiveItem";
import React from "react";
import CommonHome from "@/components/council/commonHomePage";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Navbar />
    <CommonHome title1="Youth & Education" title2="" image1="" image3="" image2="" body=""/>
      
      <CouncilObjectives />
      <CoucilStories/>
      <HumanRightsPeacePage/>
      <Footer />
    </div>
  );
}

export default page;
