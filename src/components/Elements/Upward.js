"use client";
import React, { useState, useEffect } from "react";
import {ChevronUp} from "lucide-react"


const Upward = () => {
   const [isScrolling, setIsScrolling] = useState(false);
   const scroll = () => {
      window.scrollTo(0, 0);
   };
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setIsScrolling(true);
         } else {
            setIsScrolling(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <div
         className={`p-4 fixed bottom-14 right-4 rounded-full flex items-center justify-center h-12 w-12 bg-[#92caff] text-light dark:text-dark cursor-pointer  z-[99] ${
            isScrolling ? "" : "hidden"
         }`}
         onClick={scroll}
      >
        <ChevronUp />
      </div>
   );
};

export default Upward;
