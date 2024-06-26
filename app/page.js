import {
  ColoredButton,
  TransparentButton,
} from "@/components/buttons";
import { Card } from "@/components/cards/services/card";
import { ProjectCard } from "@/components/cards/projects/card";
import { Nav } from "@/components/nav";
import { ASSETS } from "@/public/path";
import Link from "next/link";
import { WeOffers } from "@/components/carousel/offers";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto relative overflow-hidden">
      <Nav />
      {/* HERO SECTION */}
      <main
        className={`
        relative
        w-full   
        mx-auto  flex min-h-96 md:min-h-screen 2xl:min-h-[750px]  px-5 sm:px-12 md:px-14 lg:px-20`}
      >
        <div className="absolute left-0 w-full h-full lg:h-auto  2xl:h-full">
          <img
            src={ASSETS.HEADER.HERO.src}
            alt=""
            className="min-h- md:min-h-screen  h-full  w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center text-center w-full z-10">
          <div className=" space-y-4 md:space-y-6 lg:space-y-8 ">
            <div className="relative heading-1 text-white font-semibold z-10">
              <div className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl  lg:leading-[50px] uppercase">
                The perfect pool & wellness <br /> experience
              </div>
            </div>

            <div className="text-white md:w-full text-xs sm:text-sm md:text-base xl:text-xl">
              Creating value for all our stake holders
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 w-full ">
              <Link href="/toxicology">
                <TransparentButton title={"General Shareholders 2024"} />
              </Link>
              <Link href="/toxicology">
                <ColoredButton
                  title={"Results Presentation Q1 2024"}
                  background={'bg-aqua'}
                  textColor="text-white"
                  borderColor={'border-aqua'}
                />
              </Link>
              <Link href="/toxicology">
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
      <section className="bg-gray-background pt-20  mx-auto space-y-16">

        <div className="text-center">
          <div className="text-aqua font-semibold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">Our Services</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 lg:w-8/12 mx-auto">
          <Card
            image={ASSETS.OUR_SERVICES.SERVICE_1}
            icon={ASSETS.ICONS.SERVICES.SERVICES_1}
            headingOne={'Pool'}
            headingTwo={'Cleaning'}
            paragraph={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
          />
          <Card
            image={ASSETS.OUR_SERVICES.SERVICE_3}
            icon={ASSETS.ICONS.SERVICES.SERVICES_3}
            headingOne={'Equipment'}
            headingTwo={'Install'}
            paragraph={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
          />
          <Card
            image={ASSETS.OUR_SERVICES.SERVICE_2}
            icon={ASSETS.ICONS.SERVICES.SERVICES_2}
            headingOne={'Pool'}
            headingTwo={'Maintenance'}
            paragraph={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
          />
        </div>

      </section>

      {/* DATA ANALYSIS */}
      <section className="bg-gray-background pt-20  mx-auto space-y-16 min-h-screen">

        <div className="w-full flex flex-col items-center">
          <div className="bg-aqua px-8 py-2 text-white rounded-[30px] z-10 -mb-7 border-2 border-white text-3xl"><span>Data</span> <span className="font-semibold">ANALYSIS</span></div>
          <div className="bg-aqua-1000 self-end w-11/12 min-h-96 rounded-tl-[30px] rounded-bl-[70px]">
            <div className="w-full flex flex-col lg:flex-row items-center min-h-[28rem] p-5 lg:p-0">

              <div className="lg:w-1/2 lg:-mb-52">
                <img src={ASSETS.DATA_ANALYSIS.DATA_ANALYSIS_CHART.src} alt="" className="max-h-[28rem] min-h-[28rem] w-full" />
              </div>
              <div className="lg:w-1/2 lg:-mb-52 flex flex-col items-start min-h-[28rem] justify-start text-white space-y-8">

                <div className="flex items-center space-x-4 w-full">
                  <div className="flex flex-col items-center justify-between">
                    <div className="min-h-10 min-w-10">
                      <img src={ASSETS.ICONS.DATA_ANALYSIS.iGUARD.src} className="w-10 h-10" />
                    </div>
                    <div className="text-transparent">A</div>
                  </div>
                  <div>
                    <h1 className="text-[1.3rem] font-semibold">Pool Safety Tips</h1>
                    <div className='text-xs text-white font-light lg:text-sm mt-1 w-10/12'>
                      Always supervise children around the pool, ensuring they are within arm's reach at all times.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 w-full">
                  <div className="flex flex-col items-center justify-between">
                    <div className="min-h-10 min-w-10">
                      <img src={ASSETS.ICONS.DATA_ANALYSIS.iFEATURE.src} className="w-10 h-10" />
                    </div>
                    <div className="text-transparent">A</div>
                  </div>
                  <div>
                    <h1 className="text-[1.3rem] font-semibold">Pool Features</h1>
                    <div className='text-xs text-white font-light lg:text-sm mt-1 w-10/12'>
                      Infinity Edge: This pool feature creates a visual effect of water extending to the horizon, seamlessly blending with the surrounding
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="min-h-10 min-w-10">
                      <img src={ASSETS.ICONS.DATA_ANALYSIS.iPRICING.src} className="w-10 h-10" />
                    </div>
                    <div className="text-transparent">A</div>
                  </div>
                  <div>
                    <h1 className="text-[1.3rem] font-semibold">Pricing</h1>
                    <div className='text-xs text-white font-light lg:text-sm mt-1 w-10/12'>
                      Weekly Pool Cleaning Service: Starting at $75 per visit, this includes skimming debris, brushing walls, vacuuming the pool, and checking chemical levels.
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>


      </section>
      {/* WE OFFERS */}
      <section className="pt-20 bg-gray-background flex items-center justify-end">
        <div className="w-11/12">
          <div>
            <WeOffers />
          </div>
        </div>
      </section>
      {/* OUR PROJECTS */}
      <section className="bg-gray-background pt-20">
        <div className="bg-aqua rounded-3xl w-10/12 mx-auto min-h-96 py-10 px-10 space-y-10"
          style={{
            backgroundImage: `url(${ASSETS.OUR_PROJECT.OUR_PROJECT_PATTERN.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // width: '100%',
          }}
        >
          <div className="text-center">
            <div className="text-white font-semibold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">Our Projects</div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
            <ProjectCard
              image={ASSETS.OUR_PROJECT.OUR_PROJECT_1}
              headingOne={'Tranquil Garden Pool'}
              paragraph={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            />
            <ProjectCard
              image={ASSETS.OUR_PROJECT.OUR_PROJECT_2}
              headingOne={'Luxurious Poolside '}
              paragraph={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            />
            <ProjectCard
              image={ASSETS.OUR_PROJECT.OUR_PROJECT_3}
              headingOne={'Sleek Lap Pool'}
              paragraph={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            />
            <ProjectCard
              image={ASSETS.OUR_PROJECT.OUR_PROJECT_4}
              headingOne={'Modern Family Pool'}
              paragraph={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            />
          </div>


        </div>
      </section >

      {/* <Footer /> */}
    </div >
  );
}
