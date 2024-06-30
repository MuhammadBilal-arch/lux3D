'use client'
import { ASSETS } from "@/public/path";
import React, { memo, useMemo } from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MenuList } from "../nav/constant";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {

  const memoizedMenuItems = useMemo(() => {
    return MenuList.map(({ path, label }, i) => (

      <ScrollLink
        activeClass="active"
        className={`cursor-pointer hover:opacity-50 text-text-gray-text text-xs lg:text-sm`}
        to={path}
        spy={true}
        smooth={true}
        duration={1000}
        key={i}
      >
        {label}
      </ScrollLink>
    ));
  }, []);

  return (
    <main

      className={`py-5 space-y-4`}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto ">
        <img src={ASSETS.LOGO.LOGO_BLACK.src} alt="" className="h-8 md:h-12" />
        <div className="hidden md:flex  items-center space-x-4 text-xs md:text-sm lg:text-base">
          {memoizedMenuItems}
        </div>
        <div className="flex items-center text-xs md:text-base space-x-2 md:space-x-4">
          <RiTwitterXFill className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
      <div className="flex w-10/12 mx-auto text-center md:hidden  items-center justify-center space-x-4 text-xs md:text-sm lg:text-base">
        {memoizedMenuItems}
      </div>

      <div className="border-t-2 border-[#d0d0d0] w-10/12 mx-auto py-3 text-center text-gray-100 text-xs">
        © 2024 Company Name. All rights reserved.
      </div>
    </main>
  );
};

export default memo(Footer)