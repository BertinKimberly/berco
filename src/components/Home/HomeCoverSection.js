"use client";
import React, { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../Loader";
import { motion } from "framer-motion";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";

const HomeCoverSection = () => {
   const [mode, setMode] = useThemeSwitch();
   const getImageSrc = () =>
      mode === "dark" ? "/mainIconsDark.svg" : "/mainIcons.svg";

   useEffect(() => {
      // Code here will run whenever the `mode` state changes
      console.log("Mode changed:", mode); // Optional for debugging
   }, [mode]); // Add `mode` as a dependency
   return (
      <div className='w-full inline-block z-10'>
         <div className='mx-5 sm:mx-10 text-dark dark:text-light'>
            <div className='my-20 py-10 md:px-4  bg-dry '>
               <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
                  <div className='flex lg:gap-10 gap-6 flex-col'>
                     <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium   xl:leading-loose text-[#728FAA]'>
                        Read As Many Blogs As You Want . No Limitations.
                     </h1>
                     <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                        Embark on a journey through the realms of software
                        development, innovation, and problem-solving. Dive into
                        a world where lines of code shape digital landscapes and
                        ideas come to life. Join me in exploring the endless
                        possibilities of technology and the art of crafting
                        digital solutions. Whether you're a seasoned developer
                        or a curious enthusiast, there's something here for
                        everyone. Let's code, create, and collaborate together
                        as we navigate the ever-evolving realm of software
                        development. Innovation awaits around every corner!
                     </p>
                  </div>
                  <div className='flex items-center justify-center p-2  earth'>
                     <motion.div
                        whileHover={{
                           scale: 1.2,
                           transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <Suspense fallback={<Loader />}>
                           <motion.div
                              whileHover={{
                                 scale: 1.2,
                                 transition: { duration: 1 },
                              }}
                              whileTap={{ scale: 0.9 }}
                              className='w-full h-full flex justify-center items-center'
                           >
                              <Image
                                 src={getImageSrc()}
                                 alt='work icons'
                                 height={650}
                                 width={650}
                              />
                           </motion.div>
                        </Suspense>
                     </motion.div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeCoverSection;
