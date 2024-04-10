"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
const Footer = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
   console.log(errors);

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
               name: "Heroes Of The Bible",
               link: "/categories/Heroes Of The Bible",
            },
            {
               name: "Faith",
               link: "/categories/Faith",
            },
            {
               name: "Prayer",
               link: "/categories/Prayer",
            },
            {
               name: "Christian Living",
               link: "/categories/Christian Living",
            },
            {
               name: "Christian music and art",
               link: "/categories/Christian music and art",
            },
         ],
      },
      {
         title: "Me",
         links: [
            {
               name: "Dashboard",
               link: "/dashboard",
            },

            {
               name: "Create New Post",
               link: "/create-post",
            },
         ],
      },
      {
         title: "Me",
         links: [
            {
               name: "Dashboard",
               link: "/dashboard",
            },

            {
               name: "Create New Post",
               link: "/create-post",
            },
         ],
      },
   ];

   return (
      <footer className='mt-16 border-t dark:bg-dark dark:text-white  m-2 sm:m-10 flex flex-col items-center text-dark bg-white'>
         <h3 className='mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
            Interesting Stories | Updates | Guides
         </h3>
         <p className='mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base'>
            Subscribe to learn about new technology and updates. Join over 5000+
            members community to stay up to date with latest news.
         </p>

         <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-dark  dark:bg-light p-1 sm:p-2 rounded mx04'
         >
            <input
               type='email'
               placeholder='Enter your email'
               {...register("email", { required: true, maxLength: 80 })}
               className='w-full bg-transparent pl-2 sm:pl-0 text-light dark:text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
            />

            <input
               type='submit'
               className='bg-light text-dark   dark:text-white dark:bg-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1'
            />
         </form>
         <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between w-full mt-16 border-t">
         {Links.map((link, index) => (
                  <div
                     key={index}
                     className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'
                  >
                     <h3 className='text-xl lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-dark dark:text-white'>
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
                                 className='inline-block w-full hover:underline transition duration-300 ease-in'
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
