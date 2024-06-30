import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Head from "next/head";
import { ASSETS } from "@/public/path";
import Nav from '@/components/nav'
import {
  ColoredButton,
  TransparentButton,
} from "@/components/buttons";

const OurServices = dynamic(() => import('@/components/sections/landing-page/our-services'), { ssr: false });
const DataAnalysis = dynamic(() => import('@/components/sections/landing-page/data-analysis'), { ssr: false });
const WhatWeOffer = dynamic(() => import('@/components/sections/landing-page/what-we-offer'), { ssr: false });
const OurProjects = dynamic(() => import('@/components/sections/landing-page/our-projects'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });
const ScrollToTopButton = dynamic(() => import('@/components/scrollToTop'), { ssr: false });


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto relative overflow-hidden">
      <Head>
        <title>Home - Lux 3D</title>
        <meta name="description" content="The perfect pool & wellness experience" />
        <link rel="preload" href={ASSETS.HEADER.HERO.src} as="image" />
      </Head>
      <Nav />
      {/* HERO SECTION */}
      <main
        id="our-services"
        className={`
        relative
        w-full   
        mx-auto  flex min-h-96 md:min-h-screen  px-5 sm:px-12 md:px-14 lg:px-20`}
      >
        <div className="absolute left-0 w-full h-full lg:h-auto  2xl:h-full">
          <Image
            src={ASSETS.HEADER.HERO.src}
            alt="Hero Image"
            layout="fill"
            quality={75}
            objectFit="cover"
            priority={true} // Ensures it loads as a high priority image
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRUVFRUVFRUWFxUVFRUWFxUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARUAtwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAgAD/8QAHxAAAgICAQUAAAAAAAAAAAAAAAECABEDBBIhIjEy/9oADAMBAAIQAxAAAAG9uE2gdiE3ZdM/2Q=="
            className=" md:min-h-screen  h-full  w-full object-cover"
          />
        </div>
        <div
          // data-aos="fade-up"
          className="flex items-center justify-center text-center w-full z-10">
          <div className=" space-y-4 md:space-y-6 lg:space-y-8 ">
            <div

              className="relative heading-1 text-white font-semibold z-10">
              <div className="relative text-base sm:text-2xl md:text-3xl lg:text-4xl  lg:leading-[50px] uppercase">
                The perfect pool & wellness <br /> experience
              </div>
            </div>

            <div className="text-white md:w-full text-xs sm:text-sm md:text-base xl:text-xl">
              Creating value for all our stake holders
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full ">
              <Link href="/">
                <TransparentButton title={"General Shareholders 2024"} />
              </Link>
              <Link href="/">
                <ColoredButton
                  title={"Results Presentation Q1 2024"}
                  background={'bg-aqua'}
                  textColor="text-white"
                  borderColor={'border-aqua'}
                />
              </Link>
              <Link href="/">
                <ColoredButton
                  title={"Annual Integrated Report 2023"}
                  background={'bg-black'}
                  textColor="text-white"
                  borderColor={'border-black'}
                />
              </Link>
            </div>
          </div>
        </div>
      </main >
      {/* OUR SERVICES */}
      <OurServices/>
      {/* DATA ANALYSIS */}
      <DataAnalysis/>  
      {/* WE OFFERS */}
      <WhatWeOffer/>
      {/* OUR PROJECTS */}
      <OurProjects/>
      <div className="">
        <Footer />
      </div>

      <ScrollToTopButton/>
    </div >
  );
}
