"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Home = () => {
  
    useGSAP(()=>{
        let tl = gsap.timeline()
        tl.from(".header",{
           y:-50,
           opacity:0,
           duration: 1,
        })
        tl.from(".text-content h1, .text-content p", {
            y:100,
            opacity:0,
            duration:0.8
        })
    })



  return (
  <>
    <div className="section1 h-[100vh] w-[100%]">
    <div className="one container  w-[95%] m-auto">
        <div className="header flex items-center justify-between text-white px-20 z-10">
            <h2>Makepill</h2>
            <i className="fa-solid fa-bars"></i>
        </div>

        <div className="text-content h-screen flex items-center justify-center text-center text-white">
            <div className="head">
                <h1 className='text-[6.8vw] font-[600] leading-[7rem]'>Digital products</h1>
                <h1 className='text-[6.8vw] font-[600] leading-[7rem]'>creatives & immersives<span className='text-yellow-300'>*</span></h1>

                <p>
                    We think and design unique experiences <br/>
                    for tomorrow's innovatives products.
                </p>
            </div>
        </div>
    </div>

    <video src="./videos/section1 bg.mp4" muted autoPlay loop className='absolute top-0 left-0 w-full h-[100vh] object-cover -z-1'></video>
</div>
 <div className="section2 min-h-[100vh] w-full cursor-pointer">
 <video src="./videos/section 2.mp4" muted loop autoPlay  className='object-cover h-full w-full'></video>
</div>
  </>
  )
}

export default Home