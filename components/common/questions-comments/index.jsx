import { ASSETS } from "@/public/path";
import React from "react";

export const QuestionsAndComments = () => {
  return (
    <div
      className="
    grid md:grid-cols-2 gap-4 min-h-96
    blue-gradient-3 p-5 lg:p-8 xl:p-12 rounded-2xl lg:rounded-[50px]"
    >
      <div className="space-y-4 flex flex-col justify-between secondary-family text-xs lg:text-base 2xl:text-base">
        <div className="space-y-1 text-white pb-5">
          <div className="primary-family heading-2 text-white">
            How a question or comment?
          </div>
          <p className="font-medium opacity-80">
            Fill out the form and we’ll get back to you as soon as we can!
          </p>
        </div>
        <div className="space-y-5">
          <div
            data-aos="fade-right"
            className="flex items-center space-x-4 text-white font-semibold"
          >
            <img src={ASSETS.ICONS.YELLOW_PHONE.src} alt="" />
            <div>25003 Pitkin Rd, Ste F-300 Spring, TX 77386</div>
          </div>
          <div
            data-aos="fade-right"
            className="flex items-center space-x-4 text-white font-semibold"
          >
            <img src={ASSETS.ICONS.BLUE_PHONE.src} alt="" />
            <div>1250 Stephenson Highway, STE 200, Troy, MI 48083</div>
          </div>
          <div
            data-aos="fade-right"
            className="flex items-center space-x-4 text-white font-semibold"
          >
            <img src={ASSETS.ICONS.GREEN_PHONE.src} alt="" />
            <div>info@pureviewlabs.com</div>
          </div>
          <div
            data-aos="fade-right"
            className="flex items-center space-x-4 text-white font-semibold"
          >
            <img src={ASSETS.ICONS.PINK_PHONE.src} alt="" />
            <div>+1 (248) 800-6626</div>
          </div>
          <div
            data-aos="fade-right"
            className="flex items-center space-x-4 text-white font-semibold"
          >
            <img src={ASSETS.ICONS.ORANGE_PHONE.src} alt="" />
            <div>+1 (248) 800-6656</div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-center justify-end"
      >
        <img
          src={ASSETS.MAP.MAP.src}
          alt="map_image"
          className=" min-h-[450px] max-h-[450px] object-contain rounded-2xl lg:rounded-[50px]"
        />
      </div>
    </div>
  );
};
