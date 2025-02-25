"use client";
import React from "react";
import pic from "@/public/contact.gif";
import Image from "next/image";

const ContactImg = () => {
   return (
      <Image
         src={pic}
         alt="Berco"
         className="w-3/5 xs:w-1/2 md:w-3/4 h-full object-contain object-center"
         priority
         sizes="(max-width: 600px) 100vw,(max-width: 1180px) 50vw, 40vw"
      />
   );
};

export default ContactImg;
