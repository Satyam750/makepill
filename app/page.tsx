import Culture from '@/components/Culture'
import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import MainSection from '@/components/MainSection'
import { useGSAP } from '@gsap/react'
import React from 'react'

const page = () => {
  return (
    <div>
     <CustomCursor/>
      <Home/>
      <MainSection/>
      <Culture/>
      <Footer/>
    </div>
  )
}

export default page