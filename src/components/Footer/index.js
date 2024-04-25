"use client";
import React from "react";

import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
const Footer = () => {
   const Links = [
      {
         title: "Pages",
         links: [
            {
               name: "Home",
               link: "/",
            },
            {
               name: "About",
               link: "/about",
            },
            {
               name: "Contact Me",
               link: "/contact",
            },
         ],
      },
      {
         title: "Categories",
         links: [
            {
               name: "All",
               link: "/categories/all",
            },
            {
               name: "Web Development",
               link: "/categories/web-development",
            },
            {
               name: "Javascript",
               link: "/categories/javascript",
            },
            {
               name: "Productivity",
               link: "/categories/productivity",
            },
         ],
      },
      {
         title: "Popular Posts",
         links: [
            {
               name: "Best Practices in web development",
               link: "/blogs/best-practices-for-frontend-development",
            },

            {
               name: "PWA",
               link: "/blogs/progressive-web-apps-pwa",
            },
            {
               name: "What Is AI ? ",
               link: "/blogs/progressive-web-apps-pwa",
            },
         ],
      },
      {
         title: "Berco",
         links: [
            {
               name: "Give me a star on github",
               link: "https://github.com/BertinKimberly",
            },

            {
               name: "Follow me on linkedin",
               link: "/https://www.linkedin.com/in/iradukunda-bertin-074337261/",
            },
            {
               name: "Follow me on linkedin",
               link: "/https://www.linkedin.com/in/iradukunda-bertin-074337261/",
            },
         ],
      },
   ];

   return (
      <footer className='mt-16 border-t dark:bg-dark dark:text-white  m-2 sm:m-10 flex flex-col items-center text-dark bg-white z-10'>
         <div className='grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 sm:justify-between w-full mt-16'>
            {Links.map((link, index) => (
               <div
                  key={index}
                  className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'
               >
                  <h3 className='text-xl lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-[#92caff]'>
                     {link.title}
                  </h3>
                  <ul className='text-sm flex flex-col space-y-3'>
                     {link.links.map((text, index) => (
                        <li
                           key={index}
                           className='flex items-baseline'
                        >
                           <Link
                              href={text.link}
                              className='inline-block  hover:underline transition duration-300 ease-in'
                           >
                              {text.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
         <div className='flex items-center mt-8'>
            <a
               href={siteMetadata.linkedin}
               className='inline-block w-6 h-6 mr-4'
               aria-label='Reach out to me via LinkedIn'
               target='_blank'
            >
               <LinkedinIcon className='hover:scale-125 transition-all ease duration-200' />
            </a>
            <a
               href={siteMetadata.twitter}
               className='inline-block w-6 h-6 mr-4'
               aria-label='Reach out to me via Twitter'
               target='_blank'
            >
               <TwitterIcon className='hover:scale-125 transition-all ease duration-200' />
            </a>
            <a
               href={siteMetadata.github}
               className='inline-block w-6 h-6 mr-4 fill-light'
               aria-label='Check my profile on Github'
               target='_blank'
            >
               <GithubIcon className='fill-dark dark:fill-light  hover:scale-125 transition-all ease duration-200' />
            </a>
            <a
               href={siteMetadata.dribbble}
               className='inline-block w-6 h-6 mr-4'
               aria-label='Check my profile on Dribbble'
               target='_blank'
            >
               <DribbbleIcon className='hover:scale-125 transition-all ease duration-200' />
            </a>
         </div>

         <div className='w-full  mt-16 md:mt-24 font-medium flex  items-center justify-center  '>
            <span className='text-center w-max border-t pt-5 px-2'>
               &copy;2024 Berco. All rights reserved.
            </span>
         </div>
      </footer>
   );
};

export default Footer;
