import CouncilObjectives from "@/components/council/council";
import CoucilStories from "@/components/council/CouncilStories";
import HumanRightsPeacePage from "@/components/council/Environment";

import Footer from "@/components/Layout/footer";


import React from "react";


type Props = {};

function page({}: Props) {
  return (
    <div>
      <Navbar />
     <CommonHome title1="Trade & Economic" title2="" image1="" image3="" image2="" body=""/>
      <CouncilObjectives />
      <CoucilStories/>
      <HumanRightsPeacePage/>
      <Footer />
    </div>
  );
}

export default page;
