import Conference from "@/components/conference/conference";
import KnowSpeakers from "@/components/conference/KnowSpeakers";
import ThematicAreas from "@/components/conference/TheMaticArea";
import CalendarEvents from "@/components/contact-us/check";
import ContactUs from "@/components/contact-us/contactus";
import VolunteeringJobSection from "@/components/contact-us/volunteeringjob";
import Footer from "@/components/Layout/footer";
import Navbar from "@/components/Layout/navbar";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Navbar />
      <ContactUs/>
      {/* <Conference /> */}
      {/* <ThematicAreas /> */}
      {/* <KnowSpeakers /> */}
      <VolunteeringJobSection/>
      <CalendarEvents/>
      <Footer />
    </div>
  );
}

export default page;
