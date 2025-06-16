"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const section4Ref = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const parentElRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let cursor = document.querySelector(".cursor");
    const CursorMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        background: "#0f0f0f",
      });
    };
    const CursorMove2 = (e: MouseEvent) => {
      gsap.to(cursor, {
        background: "white",
      });
    };
    sectionRef.current?.addEventListener("mouseenter", CursorMove);
    sectionRef.current?.addEventListener("mouseleave", CursorMove2);

    return () => {
      sectionRef.current?.removeEventListener("mouseenter", CursorMove);
      sectionRef.current?.removeEventListener("mouseleave", CursorMove2);
    };
  });

  useGSAP(()=>{

    const sectionFour = section4Ref.current;
    const cursor = document.querySelector(".cursor");

    if (!sectionFour || !cursor) return;

    const enterHandler = () => {
        gsap.to(cursor, { backgroundColor: "white" });
      };
  
      sectionFour.addEventListener("mouseenter", enterHandler);


      gsap.to(sectionFour, {
        backgroundColor: "#0f0f0f",
        color: "white",
        scrollTrigger: {
          trigger: sectionFour.querySelector(".moving-text"),
          start: "bottom center",
          end: "bottom center",
          scrub: 2,
        //   markers: true,
        },
      });
      gsap.to(sectionFour.querySelector(".services"), {
        color: "white",
        scrollTrigger: {
          trigger: sectionFour.querySelector(".moving-text"),
          start: "bottom center",
          end: "bottom center",
          scrub: 2,
          // markers: true,
        },
      });


      const childEls = document.querySelectorAll(".first-project .first");
      const parentEl = parentElRef.current;


      childEls.forEach((item) =>{
        item.addEventListener("mouseenter",()=>{
            const id = item.getAttribute("data-id");
        const bgEl = document.querySelector(`.id-${id}`);

        parentEl?.querySelectorAll("video").forEach((vid) => {
            (vid as HTMLElement).style.display = "none";
          });
          if (bgEl) (bgEl as HTMLElement).style.display = "block";

          gsap.to(cursor, {
            height: "100px",
            width: "100px",
            duration: 0.1,
          });
  
          cursor.innerHTML = `<p style="font-size: 15px;">See Projects</p>`;
        })
        item.addEventListener("mouseleave", () => { 

            const id = item.getAttribute("data-id");
        const bgEl = document.querySelector(`.id-${id}`);

        parentEl?.querySelectorAll("video").forEach((vid) => {
          (vid as HTMLElement).style.display = "none";
        });

        if (bgEl) (bgEl as HTMLElement).style.display = "none";

        gsap.to(cursor, {
          height: "18px",
          width: "18px",
          duration: 0.1,
        });
        cursor.innerHTML = "";
        })
      })
      return () => {
        sectionFour.removeEventListener("mouseenter", enterHandler);
      };

  })

  return (
    <>
      <div
        className="section-3 min-h-screen w-full px-20 flex items-center justify-center"
        ref={sectionRef}
      >
        <div className="three container flex items-center justify-center">
          <div className="left w-full h-full">
            <video
              src="./videos/section 3.webm"
              muted
              preload="metadata"
              loop
              autoPlay
              className="w-[80%] h-[80%]"
            ></video>
          </div>
          <div className="right  w-full h-full flex flex-col gap-10">
            <h5 className="font-bold">Give life to your ideas</h5>

            <h1 className="font-[500] text-4xl">
              We pool our expertise to turn
              <br />t your wildest projects into
              <br />
              singular experiences.
            </h1>
            <h1 className="font-[500] text-4xl">
              {" "}
              Discover our diverse expertise,
              <br />
              each one providing a unique
              <br />
              dimension to your vision.
            </h1>
          </div>
        </div>
      </div>

      <div className="section4 min-h-screen h-full w-full overflow-hidden" ref={section4Ref}>
        <div className="four">
          <div className="grid place-items-center relative top-10  ">
            <div className="services h-[150px] w-[150px] rounded-full border border-solid border-[#ccc] text-[#333] flex items-center justify-center m-auto hover:bg-[#0f0f0f] hover:text-white duration-200">
              <h5>Services</h5>
            </div>
          </div>
          <div className="moving-text">
            <div className="text">
              <div className="first">
                <h1>Mind the business, we build the products</h1>
                <video src="./videos/section4.webm" muted autoPlay loop ></video>
              </div>

              <div className="first ">
                <h1>Mind the business, we build the products</h1>
                <video src="./videos/section4.webm" muted autoPlay loop></video>
              </div>

              <div className="first">
                <h1>Mind the business, we build the products</h1>
                <video src="./videos/section4.webm" muted autoPlay loop></video>
              </div>

              <div className="first">
                <h1>Mind the business, we build the products</h1>
                <video src="./videos/section4.webm" muted autoPlay loop></video>
              </div>
            </div>
          </div>
          <div className="projects">
            <div className="bg">
              <video
                src="./videos/project 1.webm"
                poster="./videos/project 1.png"
                preload="metadata"
                autoPlay
                muted
                loop
                className="id-1"
              ></video>
              <video
                src="./videos/project 2.webm"
                poster="./videos/project 2.png"
                preload="metadata"
                autoPlay
                muted
                loop
                className="id-2"
              ></video>
              <video
                src="./videos/project 3.webm"
                poster="./videos/project 3.png"
                preload="metadata"
                autoPlay
                muted
                loop
                className="id-3"
              ></video>
            </div>

            <div className="first-project container">
              <div className="first" data-id="1">
                <h1>BattleHeck</h1>

                <div className="about">
                  <h4>UI/UX Design</h4>
                  <h4>Bradnding</h4>
                  <h4>Motion</h4>
                </div>
              </div>

              <div className="first" data-id="2">
                <h1>GreenBet</h1>

                <div className="about">
                  <h4>UI/UX Design</h4>
                  <h4>Bradnding</h4>
                  <h4>Motion</h4>
                </div>
              </div>
              <div className="first" data-id="3">
                <h1>AirBus Gaming</h1>

                <div className="about">
                  <h4>UI/UX Design</h4>
                  <h4>Bradnding</h4>
                  <h4>Motion</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
