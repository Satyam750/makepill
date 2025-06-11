"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
     
  useGSAP(()=>{
         const moveCursor = (e:MouseEvent)=>{
            if(cursorRef.current){
                gsap.to(cursorRef.current,{
                    x:e.clientX,
                    y:e.clientY,
                    duration:0.2,
                    ease:"power2.out",
                })
            }
         }
         window.addEventListener("mousemove",moveCursor)
         return()=>{
            window.removeEventListener("mousemove",moveCursor)
         }
  },[])

  return (
    <div
      ref={cursorRef}
      className="cursor"
    />
  );
};

export default CustomCursor;
