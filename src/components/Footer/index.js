"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
   console.log(errors);

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
            className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-dark dark:bg-light p-1 sm:p-2 rounded mx04'
         >
            <input
               type='email'
               placeholder='Enter your email'
               {...register("email", { required: true, maxLength: 80 })}
               className='w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
            />

            <input
               type='submit'
               className='bg-light text-dark   dark:text-white dark:bg-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1'
            />
         </form>
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
