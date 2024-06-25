import React from "react";
import { ASSETS } from "@/public/path";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen max-w-[1440px] mx-auto">
      {/* Left side with image and text overlay */}

      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
        <img
          src={ASSETS.AUTH.NEW_PASSWORD.src}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="before:content-[''] absolute top-0 left-[50%] font-bold text-[26px] bg-black bg-opacity-40 h-[100%] w-[100%]  transform -translate-x-1/2 text-white p-2">
          <img
            src={ASSETS.LOGO.LOGO.src}
            alt="Logo"
            className="absolute  bottom-56 lg:bottom-96   xl:bottom-72 lg:left-10 xl:left-10 md:left-8 left-6 w-[91.97px] h-[69.12px] lg:w-[10%] lg:h-[auto]"
          />
          <div className="absolute bottom-40 md:bottom-36 lg:bottom-52 xl:bottom-44 px-5 lg:px-6 text-[26px] lg:text-[36px] font-bold text-white leading-tight">
            Don’t worry it will not take to much time!
          </div>
          <p className="absolute lg:bottom-16 md:bottom-16  bottom-12  px-5 text-[16px] mb-4 lg:mb-10">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est,
          </p>
          <img
            src={ASSETS.AUTH.SIGN_LINE.src} // Replace with the path to your bottom image
            alt="Bottom Image"
            className="absolute bottom-2  lg:bottom-10  md:bottom-6   ml-6 mb-10 w-[100px] lg:w-[150px] "
          />
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2 p-5 lg:p-28 bg-white flex flex-col justify-center md:items-center lg:items-center xl:items-center">
        <h2 className="text-xl lg:text-[28px] font-bold text-center lg:text-center xl:text-center mb-1">
          Update Password
        </h2>

        <p className="text-sm lg:text-[14px] mb-12 text-center lg:text-left">
          We sent the code to the email ending in ...doe413@gmail.com
        </p>
        <div className="flex flex-col justify-center items-center lg:items-start w-full max-w-md">
          <form className="w-full">
            <div className="flex space-x-2 justify-center mb-6">
              <input
                type="text"
                maxLength="1"
                className="border border-gray w-16 h-16 text-center text-2xl rounded focus:outline-none focus:ring-2 focus:ring-green"
              />
              <input
                type="text"
                maxLength="1"
                className="border border-gray w-16 h-16 text-center text-2xl rounded focus:outline-none focus:ring-2 focus:ring-green"
              />
              <input
                type="text"
                maxLength="1"
                className="border border-gray w-16 h-16 text-center text-2xl rounded focus:outline-none focus:ring-2 focus:ring-green"
              />
              <input
                type="text"
                maxLength="1"
                className="border border-gray w-16 h-16 text-center text-2xl rounded focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div className="flex justify-between items-center mb-6 px-10">
              <Link href="/password">
                {" "}
                <button className=" text-[#9C9CA4] text-[14px] hover:text-gray-900">
                  Back
                </button>
              </Link>

              <a
                href="#"
                className="text-[#23539C] text-[14px] hover:underline"
              >
                Don’t receive your code?
              </a>
            </div>

            <div className="mt-12 mb-10 px-10">
              <Link href="/auth/new-password">
                {" "}
                <button className="bg-green text-white w-full rounded-full py-3 ">
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;