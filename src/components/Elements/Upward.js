"use client";
import React, { useState, useEffect } from "react";

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
         className={`p-2 fixed bottom-14 right-4 rounded bg-[#92caff] text-light dark:text-dark cursor-pointer  ${
            isScrolling ? "" : "hidden"
         }`}
         onClick={scroll}
      >
         <p>Scroll To Top</p>
      </div>
   );
};

export default Upward;
