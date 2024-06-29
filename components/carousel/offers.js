'use client'
import React, { memo, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ASSETS } from '@/public/path';
import { HiMiniArrowSmallRight, HiMiniArrowSmallLeft } from "react-icons/hi2";

const WeOffers = () => {
    const sliderRef = useRef(null);

    const LANGUAGES = [
        {
            IMG: ASSETS.OUR_PROJECT.OUR_PROJECT_1,
        },
        {
            IMG: ASSETS.OUR_PROJECT.OUR_PROJECT_2,
        },
        {
            IMG: ASSETS.OUR_PROJECT.OUR_PROJECT_3,
        },
        {
            IMG: ASSETS.OUR_PROJECT.OUR_PROJECT_4,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4.5,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div
            id="services"
            className="bg-gray-extralight page-padding text-center space-y-8 py-24 overflow-hidden text-purple-primary z-30"
        >
            <div className="">
                <div className="overflow-hidden space-y-8">
                    <div className='flex items-center justify-between pr-10'>
                        <div className="text-aqua font-semibold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">What we Offer</div>
                        <div className='flex space-x-2'>
                            <div className='cursor-pointer h-12 w-12 rounded-full text-white flex items-center justify-center bg-aqua text-2xl'
                                onClick={handlePrevClick}><HiMiniArrowSmallLeft /></div>
                            <div className='cursor-pointer h-12 w-12 rounded-full text-white flex items-center justify-center bg-aqua text-2xl'
                                onClick={handleNextClick}><HiMiniArrowSmallRight /></div>
                        </div>
                    </div>
                    <Slider {...settings} ref={sliderRef}>
                        {LANGUAGES.map((items, index) => (
                            <div className={`h-96 relative group rounded-2xl px-3`} key={index}>
                                <div className='absolute cursor-pointer inset-0 mx-3 hidden group-hover:bg-black/40 p-5 h-full rounded-2xl transition duration-300 delay-150 z-10 group-hover:flex flex-col items-center justify-end'>
                                    <div className='text-left'>
                                        <div className='font-semibold text-white text-sm md:text-base lg:text-xl'>
                                            Pool Safety Tips
                                        </div>
                                        <div className='text-xs text-white font-light lg:text-sm mt-1'>
                                            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={items.IMG.src}
                                    alt=""
                                    className="rounded sm:rounded-2xl object-fill min-h-96 sm:object-cover cursor-pointer"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default memo(WeOffers)


