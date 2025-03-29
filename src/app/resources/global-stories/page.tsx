import Footer from "@/components/Layout/footer"
import Navbar from "@/components/Layout/navbar"
import GlobalStoriesFirst from "@/components/resources/GlobalStoriesFirst"
import GlobalStoriesBody from "@/components/resources/GlobalStoryBoady"
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Navbar/>
        <GlobalStoriesFirst/>
        <GlobalStoriesBody/>
        <Footer/>
    </div>
  )
}

export default page