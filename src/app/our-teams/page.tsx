
import Footer from "@/components/Layout/footer"
import Navbar from "@/components/Layout/navbar"
import OurTeamPage from "@/components/our-teams/our-teamPage"
import OurTeamSections from "@/components/our-teams/OurTeamsSections"
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
      <Navbar/>
        <OurTeamPage/>
        <OurTeamSections/>
        <Footer/>
    </div>
  )
}

export default page