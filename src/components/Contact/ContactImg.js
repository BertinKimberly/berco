"use client";
import React from "react";
import pic from "@/public/contact.gif";
import Image from "next/image";

const ContactImg = () => {
   return (
      <Image
         src={pic}
         alt='Bertin'
         className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
         priority
         sizes='(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw'
      />
   );
};

export default ContactImg;
