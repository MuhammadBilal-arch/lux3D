import { ASSETS } from "@/public/path";
import React from "react";

export const HowItsWorks = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 lg:py-20 justify-between w-11/12 md:w-10/12 lg:w-9/12 mx-auto space-y-8 md:space-y-0">
      <div className="">
        <img
          src={ASSETS.HOW_IT_WORKS.LEFT.src}
          alt=""
          className="bg-contain md:bg-cover mx-auto w-[50%] md:w-full"
        />
      </div>
      <div className="space-y-8  md:relative top-0 h-full md:w-1/2 ">
        <div
          data-aos="fade-down"
          className="flex items-center space-x-2 md:absolute top-20 left-10 md:w-11/12 xl:w-10/12"
        >
          <img
            src={ASSETS.HOW_IT_WORKS.RIGHT[1].src}
            alt=""
            className="h-8 sm:h-12 lg:h-16"
          />

          <div>
            <div className="primary-family font-semibold">
              Order The Test You Need
            </div>
            <div className="secondary-family text-sm">
              From our catalog of services, select your test and place your
              order via our simple-to-navigate online portal.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="flex items-center space-x-2 md:absolute top-52 -left-5 md:w-11/12 xl:w-10/12"
        >
          <img
            src={ASSETS.HOW_IT_WORKS.RIGHT[2].src}
            alt=""
            className="h-8 sm:h-12 lg:h-16"
          />

          <div>
            <div className="primary-family font-semibold">Take A Sample</div>
            <div className="secondary-family text-sm">
              Use a Pure View Labs collection kit and the provided mailing label
              for return shipping. It’s fast and easy.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="flex items-center space-x-2 md:absolute top-[340px] -left-32 md:w-11/12 xl:w-10/12"
        >
          <img
            src={ASSETS.HOW_IT_WORKS.RIGHT[3].src}
            alt=""
            className="h-8 sm:h-12 lg:h-16"
          />

          <div>
            <div className="primary-family font-semibold">
              Review With Patient
            </div>
            <div className="secondary-family text-sm">
              Receive your patient’s results online and/or via SMS, quickly.
              Pure View Labs support specialists are ready to provide expert
              guidance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
