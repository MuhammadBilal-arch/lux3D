"use client";
import React from "react";
import { ASSETS } from "@/public/path";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { onLoginUser } from "@/redux/slices/user";
import { TOAST_TYPE, showToast } from "@/utils/toast";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const { user, isLoading , isLogged } = useSelector((state) => state.User);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    try {
      dispatch(onLoginUser(data))
    } catch (err) {
      console.error(err);
      showToast("Error, please try resubmitting the form",TOAST_TYPE.info)
    }
  };

  if(isLogged){
    navigate.push(`/dashboard/${user.role}/analytics`)
  }
  return (
    <div className="flex flex-col lg:flex-row h-screen 2xl:h-auto max-w-[1440px] mx-auto">
      {/* Left side with image and text overlay */}

      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
        <img
          src={ASSETS.AUTH.SIGN_IN.src}
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
            Continue to power up your Ai projects.
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
      <div className="w-full overflow-y-scroll lg:w-1/2 p-5 lg:p-28  ">
        <h2 className="text-xl lg:text-[28px] font-bold text-center lg:text-left xl:text-left mb-1 ">
          Sign In
        </h2>

        <p className="mb-4 text-[14px] text-center lg:text-left">
          New user?{" "}
          <Link href="/auth/signup">
            <span className="text-[#003555] font-semibold">
              Create an account
            </span>
          </Link>
        </p>
        <div className="flex flex-col justify-center items-center w-full max-w-sm">
          <form onSubmit={onSubmitForm} className="w-full">
            <div className="mb-4">
              <label className="text-black font-semibold" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" text-black border border-gray rounded-full w-full py-3 pl-10 pr-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-4">
              <label className="text-black font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" text-black border border-gray rounded-full w-full py-3 pl-10 pr-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                placeholder="********"
              />
            </div>
            <div className="flex flex-row items-center justify-between mb-6">
              <Link href="/auth/password">
                <p className="text-green text-[12px]">Forgot Password?</p>
              </Link>

              <button
                type="submit"
                className="bg-green text-white border rounded-full py-2 px-8"
              >
                Sign In
              </button>
            </div>

            <div className="flex items-center my-4 mb-6">
              <div className="border-t border-gray flex-grow mr-3"></div>
              <div className="text-gray-600">or</div>
              <div className="border-t border-gray flex-grow ml-3"></div>
            </div>

            <div className="text-center mt-5">
              <button className="bg-transparent w-full rounded-full border border-gray">
                <span className="flex justify-center text-black font-semibold py-3 px-4">
                  <img
                    className="w-[16px] mr-2"
                    src={ASSETS.AUTH.SIGN_GOOGLE.src}
                    alt="Google"
                  />
                  <p className="text-black font-semibold">
                    Sign in with Google
                  </p>
                </span>
              </button>
            </div>
            <div className="text-center mt-5">
              <button className="bg-transparent w-full rounded-full border border-gray">
                <span className="flex justify-center text-black font-semibold py-3 px-4">
                  <img
                    className="w-[16px] mr-2"
                    src={ASSETS.AUTH.SIGN_FACEBOOK.src}
                    alt="Facebook"
                  />
                  <p className="text-black font-semibold">
                    Sign in with Facebook
                  </p>
                </span>
              </button>
            </div>
            <div className="text-center mt-5">
              <button className="bg-transparent w-full rounded-full border border-gray">
                <span className="flex justify-center text-black font-semibold py-3 px-4">
                  <img
                    className="w-[16px] mr-2"
                    src={ASSETS.AUTH.SIGN_LINKEDIN.src}
                    alt="LinkedIn"
                  />
                  <p className="text-black font-semibold">
                    Sign in with LinkedIn
                  </p>
                </span>
              </button>
            </div>
            <p className="text-[#9C9CA4] text-[14px] text-center mt-5 ">
              Protected by reCAPTCHA and subject to the Google{" "}
              <span className="text-green">
                <Link href="/">Privacy Policy</Link>
              </span>{" "}
              and{" "}
              <span className="text-green">
                <Link href="terms-conditions">Terms of Service</Link>
              </span>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
