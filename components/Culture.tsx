"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const Culture = () => {

    useGSAP(()=>{
        let sectionFive = document.querySelector(".section5");
        let cursor = document.querySelector(".cursor");
        
        const MouseCursor = () => {
            gsap.to(cursor, {
                background: "#0f0f0f",
                duration: 0.1,
              });
        }

        gsap.from(".section5 .five .left h1, .section5 .five .left h5",{
            y: 100,
            opacity: 0,
            stagger: 1,
            duration: 3,
            
            scrollTrigger: {
                trigger: ".section5 .five",
                start: "top 60%",
                end: "top 30%",
                scrub: 1,
              },
        })

        sectionFive?.addEventListener("mouseenter",MouseCursor)

        return()=>{
            sectionFive?.removeEventListener("mouseenter",MouseCursor)
        }
    })
  return (
   <>
     <div className="section5 h-screen w-full py-5 px-0 flex items-center justify-center">
        <div className="five container flex items-center justify-between px-[30px] py-0">
            <div className="left h-full w-full ml-[100px] flex flex-col gap-5">
                <h5 className='font-medium'>Our Culture</h5>
                <div className="one overflow-hidden">
                    <h1 className='text-[2.5vw] font-bold'>Human values and high<br/>
                        standards are core<br/>
                        components of our teams'<br/>
                        philosophy and culture.

                    </h1>
                </div>

                <div className="one overflow-hidden">
                    <h1 className='text-[2.5vw] font-bold'>Whether , designers or<br/>
                        developers, we all strive for<br/>
                        excellence in designing<br/>
                        ambitious, innovative projects.
                    </h1>
                </div>
            </div>

            <div className="right h-full w-full ml-[100px]">
                <video src="./videos/section 5.webm" muted loop autoPlay className='h-[90%] w-[90%]'></video>
            </div>
        </div>
    </div>
   </>
  )
}

export default Culture