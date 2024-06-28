'use client'
import {
    ColoredButton,
    TransparentButton,
} from "@/components/buttons";
import RangeSlider from "@/components/range-slider";
import { ASSETS } from "@/public/path";


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadPlat() {
    const router = useRouter()
    const [steps, setSteps] = useState(1)


    return (
        <div
            style={{
                backgroundImage: `url(${ASSETS.BACKGROUND.bgPOOL_MODEL_SCREEN.src})`,
            }}
            className="bg-cover md:max-h-screen  bg-bottom w-full min-h-screen 2xl:min-h-full pb-20 max-w-[1440px] bg-no-repeat mx-auto">
            <div className="w-[25%] flex flex-col items-center justify-between bg-blend-overlay bg-black bg-opacity-50 backdrop-blur-sm z-10 min-h-screen">
                <div className="flex flex-col items-center justify-center text-center relative">
                    <div>
                        <img
                            src={ASSETS.LOGO.LOGO_WHITE.src}
                            alt=""
                            className="w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 mx-auto"
                        />
                        <div className="w-11/12 mx-auto flex flex-col  h-full items-center justify-between">
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
                                        <div className="bg-blend-overlay max-h-32 bg-white bg-opacity-30 py-2 space-y-2 overflow-y-scroll backdrop-blur-sm px-4 rounded-xl w-full ">
                                            <div className="flex space-x-2 items-center text-white">
                                                <img src={ASSETS.POOL.LOGO.POOL_TITLE_1.src} alt="" className="w-7 h-7" />
                                                <div className="font-semibold text-sm">Pool Shape</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 bg-white bg-opacity-10">
                                                <div className="w-full h-full">
                                                    <img src={ASSETS.POOL.TYPE.POOL_1.src} className="rounded-md" alt="" />

                                                </div>
                                                <div>
                                                    <img src={ASSETS.POOL.TYPE.POOL_2.src} className="rounded-md" alt="" />
                                                </div>
                                                <div className="w-full h-full">
                                                    <img src={ASSETS.POOL.TYPE.POOL_1.src} className="rounded-md" alt="" />
                                                </div>
                                                <div>
                                                    <img src={ASSETS.POOL.TYPE.POOL_2.src} className="rounded-md" alt="" />
                                                </div>
                                                <div className="w-full h-full">
                                                    <img src={ASSETS.POOL.TYPE.POOL_1.src} className="rounded-md" alt="" />
                                                </div>
                                                <div>
                                                    <img src={ASSETS.POOL.TYPE.POOL_2.src} className="rounded-md" alt="" />
                                                </div>

                                            </div>
                                        </div> : steps === 3 ?
                                            <div className="bg-blend-overlay max-h-[26rem] bg-white bg-opacity-30 py-2 space-y-2 overflow-y-scroll backdrop-blur-sm px-4 rounded-xl w-full ">
                                                <div className="flex space-x-2 items-center text-white">
                                                    <img src={ASSETS.POOL.LOGO.POOL_TITLE_2.src} alt="" className="w-7 h-7" />
                                                    <div className="font-semibold text-sm">Tile & Coping materials</div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="w-full h-full flex-col space-y-1">
                                                        <img src={ASSETS.POOL.TILES.TILE_1.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_2.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_3.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_4.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_5.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_6.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_7.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_8.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_7.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-full">
                                                        <img src={ASSETS.POOL.TILES.TILE_8.src} className="rounded-md" alt="" />
                                                        <div>
                                                            <input type="radio" />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div> : steps === 4 ?
                                                <div className="bg-blend-overlay max-h-[26rem] bg-white bg-opacity-30 py-2 space-y-2 overflow-y-scroll backdrop-blur-sm px-4 rounded-xl w-full ">
                                                    <div className="flex space-x-2 items-center text-white">
                                                        <img src={ASSETS.POOL.LOGO.POOL_TITLE_3.src} alt="" className="w-7 h-7" />
                                                        <div className="font-semibold text-sm">Decking</div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="w-full h-full flex-col space-y-1">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_1.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_2.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_3.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_4.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_5.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_6.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_7.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_8.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_7.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-full">
                                                            <img src={ASSETS.POOL.DECKING.DECKING_8.src} className="rounded-md" alt="" />
                                                            <div>
                                                                <input type="radio" />
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div> :
                                                <div className="bg-blend-overlay min-w-full bg-white bg-opacity-30 py-2 backdrop-blur-sm px-4 rounded-xl w-[300px] ">
                                                    <div className="flex space-x-2 items-center text-white">
                                                        <img src={ASSETS.POOL.LOGO.POOL_TITLE_4.src} alt="" className="w-7 h-7" />
                                                        <div className="font-semibold text-sm">LUX3D AI Assist</div>
                                                    </div>
                                                    <div className="flex text-sm items-center space-x-2 w-full text-white">
                                                        <div className="w-7 h-7"></div>
                                                        <div className="flex items-center space-x-4">
                                                        <div className="">
                                                        <label className="text-xs flex items-center space-x-1">
                                                            <input type="radio" name="choice" value="yes"/>
                                                            <span>Yes</span>   
                                                        </label>
                                                        </div>
                                                        <div className="28">
                                                        <label className="text-xs flex items-center space-x-1">
                                                            <input type="radio" name="choice" value="no"/>
                                                            <span>No</span>   
                                                        </label>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                


                            }
                        </div>

                    </div>

                </div>
                <div className="flex items-center justify-center space-x-4 pb-10 w-11/12 mx-auto">
                    <TransparentButton
                    onHandleClick={()=>setSteps(steps - 1)}
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
    );
}
