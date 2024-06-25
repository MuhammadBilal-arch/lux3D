"use client";
import React, { useEffect, useState } from "react";
import { ASSETS } from "@/public/path";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { onRegisterUser } from "@/redux/slices/user";

const SignUp = () => {
  const dispatch = useDispatch()
  const [labs, setlabs] = useState([]);
  useEffect(() => {
    const onFetchLabs = async () => {
      try {
        const response = await fetch("/api/lab/getall", {
          method: "get",
        });

        if (!response.ok) {
          throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        if (responseData) {
          console.log(responseData);
          setlabs(responseData.data);
        }
        console.log(responseData["message"]);
      } catch (err) {
        console.error(err);
        alert("Error, please try resubmitting the form");
      }
    };

    onFetchLabs();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (e.target[1].value != e.target[2].value) {
      alert("Error, Password and confirm password not matched.");
    }

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
      labUserId: e.target[3].value
    };
    dispatch(onRegisterUser(data))
    return 



    console.log(data)
    try {
      const response = await fetch("/api/auth/signup", {
        method: "post",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      if (responseData) {
        console.log(responseData);
      }
      console.log(responseData["message"]);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
      <div className="relative w-full lg:w-1/2 h-1/2 lg:min-h-screen 2xl:min-h-max lg:max-h-screen overflow-hidden">
        <img
          src={ASSETS.AUTH.SIGN_UP.src}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="before:content-[''] absolute top-0 left-[50%] min-h-full font-bold text-[26px] bg-green bg-opacity-60 w-[100%]  transform -translate-x-1/2 text-white p-2">
          <img
            src={ASSETS.LOGO.LOGO.src}
            alt="Logo"
            className="absolute  bottom-56 lg:bottom-96   xl:bottom-72 lg:left-10 xl:left-10 md:left-8 left-6 w-[91.97px] h-[69.12px] lg:w-[10%] lg:h-[auto]"
          />
          <div className="absolute bottom-40 md:bottom-36 lg:bottom-52 xl:bottom-44 px-5 lg:px-6 text-[26px] lg:text-[36px] font-bold text-white leading-tight">
            Gain access to our powerful tools and pre-built models.
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
      <div className="w-full  max-h-min lg:w-1/2 p-5 lg:p-28 flex flex-col justify-center items-start md:items-center lg:items-start xl:items-start 2xl:items-center">
        <h2 className="text-xl lg:text-[28px] font-bold text-center lg:text-left xl:text-left mb-1">
          Create An Account
        </h2>

        <p className="mb-4 text-[14px] text-center lg:text-left">
          Already have an account?
          <Link href="/auth/signin">
            <span className="text-[#003555] font-semibold">Login</span>
          </Link>
        </p>
        <div className="flex flex-col justify-center items-center w-full max-w-sm">
          <form onSubmit={onSubmitForm} className="w-full">
            <div className="mb-4 space-y-1">
              <label className="text-black font-semibold" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" text-black border border-gray rounded-full w-full py-1.5 xl:py-2 2xl:py-3 pl-10 pr-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-4 space-y-1">
              <label className="text-black font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" text-black border border-gray rounded-full w-full py-1.5 xl:py-2 2xl:py-3 pl-10 pr-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                placeholder="********"
              />
            </div>

            <div className="mb-4 space-y-1">
              <label className="text-black font-semibold" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                name="confirm_password"
                className=" text-black border border-gray rounded-full w-full py-1.5 xl:py-2 2xl:py-3 pl-10 pr-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                placeholder="********"
              />
            </div>
            <div className="mb-4 space-y-1">
              <label className="text-black font-semibold" htmlFor="password">
                Select Lab
              </label>

              <div className=" text-black border border-gray rounded-full w-full py-1.5 xl:py-2 2xl:py-3 pl-10 pr-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green">
                <select 
                defaultValue={labs[0]?.id}
                className="w-full outline-none">
                  {labs.map((item, index) => (

                    <option key={index} value={item.id}>
                      {item.username}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className=" mb-6">
              <button
                type="submit"
                className="bg-[#32CC2E] text-white w-full border rounded-full py-2 px-8"
              >
                Sign Up
              </button>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-[#9C9CA4] text-[14px] text-left mt-4">
                Protected by reCAPTCHA and subject to the Google{" "}
                <span className="text-green">
                  <Link href="/">Privacy Policy</Link>
                </span>{" "}
                and{" "}
                <span className="text-green">
                  <Link href="terms-conditions">Terms of Service</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
