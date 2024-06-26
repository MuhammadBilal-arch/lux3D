'use client'
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { ASSETS } from '@/public/path'
import { HiMiniArrowSmallRight, HiMiniArrowSmallLeft } from "react-icons/hi2";


const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
export const WeOffers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    ]

    const responsive = {
        0: {
            items: 3,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
        1300: {
            items: 4.5,
        },
    }

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : LANGUAGES.length - 1));
    };

    const handleNextClick = () => {

        setCurrentIndex(prevIndex => (prevIndex < LANGUAGES.length - 1 ? prevIndex + 1 : 0));
    };

    console.log(currentIndex,"currentIndex")
    return (
        <div
            id="services"
            className="bg-gray-extralight page-padding text-center space-y-8 py-24 overflow-hidden  text-purple-primary z-30">
            <div className="">
                <div className="overflow-hidden space-y-8">
                    <div className='flex items-center justify-between pr-10'>
                        <div className="text-aqua font-semibold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">Our Services</div>
                        <div className='flex space-x-2'>
                            <div
                                onClick={handlePrevClick}
                                className='cursor-pointer h-12 w-12 rounded-full text-white flex items-center justify-center bg-aqua text-2xl'><HiMiniArrowSmallLeft /></div>
                            <div
                                onClick={handleNextClick}
                                className='cursor-pointer h-12 w-12 rounded-full text-white flex items-center justify-center bg-aqua text-2xl'><HiMiniArrowSmallRight /></div>
                        </div>
                    </div>
                    <OwlCarousel
                        // ref={carouselRef}
                        className="owl-theme"
                        items={4}
                        loop
                        onChanged={(event) => setCurrentIndex(event.page.index)}
                        margin={10}
                        autoplay={false}
                        autoplayTimeout={4000}
                        autoplaySpeed={250}
                        navSpeed={250}
                        active={currentIndex}
                        nav={false}
                        dots={false}
                        responsive={responsive}
                    >
                        {LANGUAGES.map((items, index) => {
                            return (
                                <div className="h-96 relative group rounded-2xl" key={index}>
                                    <div className='absolute cursor-pointer inset-0 hidden group-hover:bg-black/40 p-5 h-full rounded-2xl transition duration-300 delay-150 z-10  group-hover:flex flex-col items-center justify-end'>
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
                                        className="rounded sm:rounded-2xl object-fill  min-h-96 sm:object-cover cursor-pointer"
                                    />
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

