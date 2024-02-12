import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
   return (
      <main className='flex flex-col items-center justify-center'>
         <h1 className='text-4xl mt-10 text-center mx-10 text-blue-500 dark:text-white'>
            Welcome to Berco . Learn best software approaches to solve different problems.Have fun at Berco.
         </h1>
         <HomeCoverSection blogs={allBlogs} />
         <FeaturedPosts blogs={allBlogs} />
         <RecentPosts blogs={allBlogs} />
      </main>
   );
}
