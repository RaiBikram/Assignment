import JoinCommunity from "@/components/JoinCommunity"
import Footer from "@/components/Layout/footer"
import Navbar from "@/components/Layout/navbar"
import MembershipJourney from "@/components/membership/ApplicationJourny"
import MembershipFirst from "@/components/membership/mempershipFirst"
// import ObjectiveSection, { objectives } from "@/components/ObjectiveSection"
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>

        <Navbar/>
        <MembershipFirst/>
        {/* <ObjectiveSection heading="Objectives" objectives={objectives}/>
        <ObjectiveSection heading="Are You ready to Join GAC" objectives={objectives}/> */}
        <JoinCommunity title="Are you Ready?" discreption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ullam aut inventore sit beatae tenetur repellat dignissimos quas. Rerum illum id ipsum ullam delectus beatae praesentium magnam expedita consequuntur voluptate."/>
        <MembershipJourney/>
        <Footer/>
    </div>
  )
}

export default page