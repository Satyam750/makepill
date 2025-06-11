"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const Footer = () => {

  useGSAP(()=>{
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");
    let sectionSeven = document.querySelector(".section7");

    gsap.to(body, {
        background: "#0f0f0f",
        color: "white",
        scrollTrigger: {
          trigger: ".section5 .right",
          start: "bottom 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      const MouseEnter = () => {
        gsap.to(cursor, {
            background: "white",
            duration: 0.1,
            scrollTrigger: {
              trigger: ".section5 .right",
              start: "bottom 60%",
              end: "bottom 40%",
              scrub: 1,
            },
          });
      }

      const MouseLeave = () => {
        gsap.to(cursor, {
            background: "black",
            duration: 0.1,
            scrollTrigger: {
              trigger: ".section5 .right",
              start: "bottom 60%",
              end: "bottom 40%",
              scrub: 1,
            },
          });
      }

      sectionSeven?.addEventListener("mouseenter",MouseEnter)
      sectionSeven?.addEventListener("mouseleave",MouseLeave)

      return()=>{
        sectionSeven?.removeEventListener("mouseenter",MouseEnter)
      sectionSeven?.removeEventListener("mouseleave",MouseLeave)
      }

  })

  return (
    <>
      <div className="section7">
        <div className="seven">
            <h4>Follow Us</h4>

            <div className="follow">
                <div className="box">

                    <h1>Instagram</h1>

                    <div className="back">
                        <div className="insta">
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                            <h3>* Instagrm * <span>@makepill</span></h3>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <h1>Facebook</h1>

                    <div className="back">
                        <div className="insta">
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                            <h3>* Facebook * <span>@makepill</span></h3>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <h1>X/Twitter</h1>

                    <div className="back">
                        <div className="insta">
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                            <h3>* X/Twitter * <span>@makepill</span></h3>
                        </div>
                    </div>
                </div>

                <div className="box">

                    <h1>Dribble</h1>

                    <div className="back">
                        <div className="insta">
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                            <h3>* Dribble * <span>@makepill</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer