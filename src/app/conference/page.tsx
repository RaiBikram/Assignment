import ApplicationForm from "@/components/conference/applicationForm";
import Conference from "@/components/conference/conference";
import PreviewForm from "@/components/conference/FormPreview";
import KnowSpeakers from "@/components/conference/KnowSpeakers";
import ThematicAreas from "@/components/conference/TheMaticArea";
import Footer from "@/components/Layout/footer";
import Navbar from "@/components/Layout/navbar";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Navbar />
      <Conference />
      <ThematicAreas />
     
      {/* <PreviewForm/> */}
      <KnowSpeakers />
      <Footer />
    </div>
  );
}

export default page;
