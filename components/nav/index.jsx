"use client";

import Link from "next/link";
import { useEffect, useRef, useState , memo} from "react";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { ASSETS } from "@/public/path";
import { WhiteButton } from "../buttons";

const Nav = () => {
  const [drawerState, setDrawerState] = useState(false);
  const drawerRef = useRef(null);
  const onToggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerState(false);
      }
    };

    if (drawerState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerState]);

  return (
    <>
      <nav className="z-[1000] bg-black-gradient px-5 sm:px-12 md:px-14 lg:px-20 absolute w-full flex items-center justify-between  py-6 text-white ">
        <Link href="/" className="cursor-pointer">
          <img src={ASSETS.LOGO.LOGO.src} className="h-6 md:h-14" alt="logo" />
        </Link>
        <div className="hidden md:block ">
          <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8">
            <li>
              <Link href="/auth/signin">Our Services</Link>
            </li>
            <li>
              <Link href="/toxicology">Analytics</Link>
            </li>
            <li>
              <Link href="/help">Our Projects</Link>
            </li>
            <li>
              <Link href="/payment">What we offer</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={onToggleDrawer}
          />
        </div>
        <div className="hidden md:block">
          <Link href="/ai-involvement">
            <WhiteButton title="Get Quote" type={"button"} />
          </Link>
        </div>
      </nav>
      {drawerState && (
        <div
          ref={drawerRef}
          className="min-h-screen duration-300 fixed w-[250px] z-[1000] bg-white p-5">
          <div className="flex flex-col items-center  h-full text-black">
            <div className="flex items-center justify-end w-full">
              <RiCloseFill
                onClick={onToggleDrawer}
                className="text-red text-3xl cursor-pointer" />
            </div>
            <ul className="space-y-4 lg:space-x-6 xl:space-x-8">
              <li>
                <Link href="/auth/signin">Our Services</Link>
              </li>
              <li>
                <Link href="/toxicology">Analytics</Link>
              </li>
              <li>
                <Link href="/help">Our Projects</Link>
              </li>
              <li>
                <Link href="/payment">What we offer</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Nav)
