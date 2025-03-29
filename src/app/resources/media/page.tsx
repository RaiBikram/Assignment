import Footer from "@/components/Layout/footer"
import Navbar from "@/components/Layout/navbar"
import MediaBodyPage from "@/components/resources/mediabody"
import MediaFirstPage from "@/components/resources/mediaFirst"
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Navbar/>
        <MediaFirstPage/>
        <MediaBodyPage/>
        <Footer/>
    </div>
  )
}

export default page