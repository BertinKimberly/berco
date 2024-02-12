import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
   const sortedBlogs = sortBlogs(blogs);
   const blog = sortedBlogs[0];

   return (
      <div className='w-full inline-block'>
         <div className='mx-5 sm:mx-10 text-dark dark:text-light'>
            
            <div className='my-20 py-10 md:px-4  bg-dry '>
               <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
                  <div className='flex lg:gap-10 gap-6 flex-col'>
                     <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium   xl:leading-loose'>
                        Read As Many Blogs As You Want . No Limitations.
                     </h1>
                     <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                        Welcome to our Gospel Blog, where inspiration meets
                        revelation! Dive into the uplifting messages of faith,
                        hope, and love that resonate with the core of Gospel
                        teachings. Explore a journey of spiritual growth and
                        enlightenment with our diverse content. Join our
                        community as we share the timeless wisdom that guides us
                        through life's challenges. Let the power of gospel
                        illuminate your path. Blessings await!
                     </p>
                  </div>
                  <div className='flex items-center justify-center p-2 '>
                     <h1>Glad</h1>
                  </div>
               </div>
            </div>
         </div>
         <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
            <div
               className='absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            '
            />
            <Image
               src={blog.image.filePath.replace("../public", "")}
               placeholder='blur'
               blurDataURL={blog.image.blurhashDataUrl}
               alt={blog.title}
               fill
               className='w-full h-full object-center object-cover rounded-3xl -z-10'
               sizes='100vw'
               priority
            />

            <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
               <Tag
                  link={`/categories/${slug(blog.tags[0])}`}
                  name={blog.tags[0]}
               />
               <Link
                  href={blog.url}
                  className='mt-6'
               >
                  <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                     <span
                        className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '
                     >
                        {blog.title}
                     </span>
                  </h1>
               </Link>
               <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
                  {blog.description}
               </p>
            </div>
         </article>
      </div>
   );
};

export default HomeCoverSection;
