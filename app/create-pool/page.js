'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";
import RangeSlider from "@/components/range-slider";

import {
    ColoredButton,
    TransparentButton,
} from "@/components/buttons";
import { PoolItemsCard } from "@/components/cards/create-pool/card";
import RadioButtons from "@/components/radio/create-pool";

import { ASSETS } from "@/public/path";
import Loading from "../loading";
import Head from "next/head";

const CreatePool = () => {
    const router = useRouter()
    const [steps, setSteps] = useState(1)
    const [selectPool, setSelectPool] = useState(1)
    const [loading , setLoading] = useState(true)


    const PoolTiles = [
        {
            img: ASSETS.POOL.TILES.TILE_1,
        },
        {
            img: ASSETS.POOL.TILES.TILE_2,
        },
        {
            img: ASSETS.POOL.TILES.TILE_3,
        },
        {
            img: ASSETS.POOL.TILES.TILE_4,
        },
        {
            img: ASSETS.POOL.TILES.TILE_5,
        },
        {
            img: ASSETS.POOL.TILES.TILE_6,
        },
        {
            img: ASSETS.POOL.TILES.TILE_7,
        },
        {
            img: ASSETS.POOL.TILES.TILE_8,
        }
    ]
    const PoolDecking = [
        {
            img: ASSETS.POOL.DECKING.DECKING_1,
        },
        {
            img: ASSETS.POOL.DECKING.DECKING_2,
        },
        {
            img: ASSETS.POOL.DECKING.DECKING_3,
        },
        {
            img: ASSETS.POOL.DECKING.DECKING_4,
        },
        {
            img: ASSETS.POOL.DECKING.DECKING_5,
        },
        {
            img: ASSETS.POOL.DECKING.DECKING_6,
        },
        {
            img: ASSETS.POOL.DECKING.DECKING_7,
        },
        {
            img: ASSETS.POOL.DECKING.DECKING_8,
        }
    ]

    return (
        <div
            className="bg-cover relative md:max-h-screen  bg-bottom w-full min-h-screen 2xl:min-h-full pb-20 max-w-[1440px] bg-no-repeat mx-auto">
            <Head>
                <title>Create Pool - Lux 3D</title>
                <meta name="create pool" content="The perfect pool & wellness experience" />
                <link rel="preload" href={ASSETS.BACKGROUND.bgPOOL_MODEL_SCREEN.src} as="image" />
            </Head>
            {loading && <Loading />}
            <div className="relative w-full h-full flex">
                <div className="w-11/12 mx-auto lg:mx-0 md:w-1/2 lg:w-[30%] xl:w-[25%] flex flex-col items-center justify-between bg-blend-overlay bg-black bg-opacity-50 backdrop-blur-sm z-10 min-h-screen">
                    <div className="flex flex-col items-center justify-between  text-center">
                        <div className="">
                            <img
                                src={ASSETS.LOGO.LOGO_WHITE.src}
                                alt=""
                                className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto"
                            />
                            <div className="w-11/12 mx-auto flex flex-col h-full items-center justify-between">
                                {
                                    steps === 1 ?
                                        <div className="bg-blend-overlay bg-white bg-opacity-30 py-2 backdrop-blur-sm px-4 rounded-xl w-full ">
                                            <div className="flex space-x-2 items-center text-white">
                                                <img src={ASSETS.ICONS.DATA_ANALYSIS.iGUARD.src} alt="" className="w-7 h-7" />
                                                <div className="font-semibold text-sm">Budget</div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-7 h-7"></div>
                                                <RangeSlider />
                                            </div>
                                        </div> : steps === 2 ?
                                            <div className="bg-blend-overlay max-h-32  py-2 space-y-2 overflow-y-scroll  px-4 rounded-xl w-full min-w-[300px]">
                                                <div className="flex space-x-2 items-center text-white">
                                                    <img src={ASSETS.POOL.LOGO.POOL_TITLE_1.src} alt="" className="w-7 h-7" />
                                                    <div className="font-semibold text-sm">Pool Shape</div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4 ">
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TYPE.POOL_1.src}
                                                            onClick={() => setSelectPool(1)}
                                                            className={`rounded-md cursor-pointer ${selectPool == 1 && 'opacity-50'}`} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={ASSETS.POOL.TYPE.POOL_2.src}
                                                            onClick={() => setSelectPool(2)}
                                                            className={`rounded-md cursor-pointer ${selectPool == 2 && 'opacity-50'}`} alt="" />
                                                    </div>

                                                </div>
                                            </div> : steps === 3 ?
                                                <div className="bg-blend-overlay  bg-white bg-opacity-20 py-4  backdrop-blur-sm rounded-xl w-full min-w-[300px]">
                                                    <div className="overflow-y-auto max-h-[350px] xl:max-h-[450px] 2xl:max-h-[500px]  space-y-4 px-4">
                                                        <div className="flex space-x-2 items-center text-white">
                                                            <img src={ASSETS.POOL.LOGO.POOL_TITLE_2.src} alt="" className="w-7 h-7" />
                                                            <div className="font-medium text-sm">Tile & Coping materials</div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {
                                                                PoolTiles.map((item, index) => <PoolItemsCard img={item.img} key={index} />)
                                                            }
                                                        </div>
                                                    </div>
                                                </div> : steps === 4 ?
                                                    <div className="bg-blend-overlay  bg-white bg-opacity-20 py-4  backdrop-blur-sm  rounded-xl w-full min-w-[300px] ">
                                                        <div className="overflow-y-auto max-h-[350px] xl:max-h-[450px] 2xl:max-h-[500px]  space-y-4 px-4">
                                                            <div className="flex space-x-2 items-center text-white">
                                                                <img src={ASSETS.POOL.LOGO.POOL_TITLE_3.src} alt="" className="w-7 h-7" />
                                                                <div className="font-semibold text-sm">Decking</div>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                {
                                                                    PoolDecking.map((item, index) => <PoolItemsCard img={item.img} key={index} />)
                                                                }
                                                            </div>
                                                        </div>
                                                    </div> :
                                                    <div className="bg-blend-overlay bg-white bg-opacity-30 py-2 backdrop-blur-sm px-4 rounded-xl min-w-[300px] ">
                                                        <div className="flex space-x-2 items-center text-white">
                                                            <img src={ASSETS.POOL.LOGO.POOL_TITLE_4.src} alt="" className="w-7 h-7" />
                                                            <div className="font-semibold text-sm">LUX3D AI Assist</div>
                                                        </div>
                                                        <div className="flex text-sm items-center space-x-2 w-full text-white">
                                                            <div className="w-7 h-7"></div>
                                                            <RadioButtons />
                                                        </div>
                                                    </div>
                                }
                            </div>

                        </div>

                    </div>
                    <div className="flex items-center justify-center space-x-4 py-10 w-11/12 mx-auto">
                        <TransparentButton
                            onHandleClick={() => setSteps(steps - 1)}
                            title={'Back'}
                            textColor="text-white"
                            borderColor="border-white"
                        />
                        <ColoredButton
                            onHandleClick={() => steps === 5 ? router.push('/quote') : setSteps(steps + 1)}
                            title={"Next"} textColor="text-white" background={'bg-aqua'} borderColor={'border-aqua'} />
                    </div>
                </div>

            </div>
            <div className="absolute inset-0">
                <Image
                    src={ASSETS.BACKGROUND.bgPOOL_MODEL_SCREEN.src}
                    alt="Hero Image"
                    layout="fill"
                    quality={75}
                    objectFit="cover"
                    priority={true} // Ensures it loads as a high priority image
                    placeholder="blur"
                    onLoad={() => setLoading(false)}
                    onError={() => setLoading(true)}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRUVFRUVFRUWFxUVFRUWFxUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARUAtwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAgAD/8QAHxAAAgICAQUAAAAAAAAAAAAAAAECABEDBBIhIjEy/9oADAMBAAIQAxAAAAG9uE2gdiE3ZdM/2Q=="
                    className=" h-full  w-full object-cover"
                />
            </div>

        </div>
    );
}

export default memo(CreatePool)