import { ASSETS } from "@/public/path";
import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <main

      className={`
       py-5 space-y-4
            `}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto ">
        <img src={ASSETS.LOGO.LOGO_BLACK.src} alt="" className="h-12" />
        <div className="flex items-center space-x-4 text-xs md:text-sm lg:text-base">
          <div className="cursor-pointer">Our Services</div>
          <div className="cursor-pointer">Analytics</div>
          <div className="cursor-pointer">Our Projects</div>
          <div className="cursor-pointer">What we offer</div>
        </div>
        <div className="flex items-center space-x-4">
          <RiTwitterXFill className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
      <div className="border-t-2 border-[#d0d0d0] w-10/12 mx-auto py-3 text-center text-gray-100 text-xs">
        © 2024 Company Name. All rights reserved.
      </div>
    </main>
  );
};
