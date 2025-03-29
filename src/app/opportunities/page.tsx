import Footer from "@/components/Layout/footer";
import Navbar from "@/components/Layout/navbar";
import CurrntJobOpening from "@/components/opportunities/CurrentJobOpening";
import ValuesSection from "@/components/opportunities/ourvalues";
import VolunteerActivity from "@/components/opportunities/VolunteerActivity";
import React from "react";



function pages() {
  return (
    <div>
      <Navbar/>
  <ValuesSection/>
  <VolunteerActivity/>
  <CurrntJobOpening/>
  <Footer/>
    </div>
  );
}

export default pages;
