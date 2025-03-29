
import Footer from "@/components/Layout/footer"
import Navbar from "@/components/Layout/navbar"
import BlogCard from "@/components/resources/blogBody"
import BlogSection from "@/components/resources/blogsectionFirst"
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Navbar/>
        <BlogSection/>
        <BlogCard/>
        <Footer/>
    </div>
  )
}

export default page