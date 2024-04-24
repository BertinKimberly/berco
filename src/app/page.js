"use client";
import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import StarsCanvas from "../components/Home/StarBackground";

export default function Home() {
   return (
      <main className='flex flex-col items-center justify-center z-10'>
         <StarsCanvas />
         <div className='z-10'>
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
            <RecentPosts blogs={allBlogs} />
         </div>
      </main>
   );
}
