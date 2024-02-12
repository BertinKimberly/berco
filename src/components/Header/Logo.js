import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const Logo = () => {
   return (
      <Link
         href='/'
         className='flex items-center text-dark dark:text-light'
      >
         <div className=' w-12 md:w-16  overflow-hidden  mr-2 md:mr-4'>
            <Image
               src={logo}
               alt='Berco logo'
               className='w-full h-auto bg-transparent'
               sizes='20vw'
               priority
            />
         </div>
         <span className='font-bold dark:font-semibold text-lg md:text-xl'>
            Berco
         </span>
      </Link>
   );
};

export default Logo;
