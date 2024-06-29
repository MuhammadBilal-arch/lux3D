'use client'
import { useRouter } from "next/navigation";
import { memo } from "react";

import {
    ColoredButton,
} from "@/components/buttons";
import { ASSETS } from "@/public/path";

const Quote = () => {
    const router = useRouter()

    return (
        <div className="bg-cover flex flex-col items-center justify-center md:max-h-screen bg-bottom w-full min-h-screen 2xl:min-h-screen pb-20 max-w-[1440px] bg-no-repeat mx-auto" style={{ backgroundImage: `url(${ASSETS.BACKGROUND.bgQUOTE_SCREEN.src})` }}>
            <div className="flex flex-col items-center justify-center text-center relative">
                <img
                    src={ASSETS.LOGO.LOGO_WHITE.src}
                    alt=""
                    className="w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 mx-auto"
                />
                <div className="">
                    <div className="mx-auto text-xl sm:text-2xl md:text-xl lg:text-2xl 2xl:text-3xl text-white">
                        Your Quote is Ready
                    </div>
                    <div className="text-white text-xs 2xl:text-sm w-10/12 md:w-7/12 mx-auto">
                        If you have any questions or need further customization, feel free to contact us. Thank you for choosing our services!
                    </div>

                </div>
            </div>
            <div className="flex mt-16 flex-col items-center py-10 text-center mx-auto relative z-10 p-3
                        inset-0 bg-white  rounded-2xl w-11/12 md:w-10/12 lg:w-7/12 min-h-96">
                <div className="mx-auto absolute -top-[3.7rem]">
                    <img src={ASSETS.ICONS.QUOTE.iTHANK_YOU.src} alt="" className="h-24" />
                </div>
                <div className="space-y-2 text-center md:w-1/2 lg:w-1/3">
                    <div className="text-center text-xs 2xl:text-sm text-gray-100">
                        Plasse review the quote make sure everything
                        is accrate before proceeding
                    </div>
                    <div className="text-center font-semibold text-lg md:text-lg lg:text-xl 2xl:text-2xl text-gray-text">
                        $344.00
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 w-11/12 mx-auto mt-8">
                    <div className="overflow-hidden rounded-2xl max-h-44">
                        <img src={ASSETS.MIX.POOL.src} alt="" className="object-cover w-full h-full overflow-hidden rounded-2xl" />
                    </div>
                    <div className=" text-left flex flex-col justify-center space-y-2">
                        <div className="font-semibold text-sm md:text-base lg:text-lg">Pool Specification:</div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-gradient w-full space-x-2 flex items-center p-1.5 rounded-full">
                                <img src={ASSETS.ICONS.QUOTE.iAREA.src} alt="" />
                                <div className="flex flex-col justify-between">
                                    <div className="text-aqua text-sm font-semibold">Area:</div>
                                    <div className="text-black text-xs">600 sqft</div>
                                </div>
                            </div>
                            <div className="bg-gray-gradient w-full space-x-2 flex items-center p-1.5 rounded-full">
                                <img src={ASSETS.ICONS.QUOTE.iSIZE.src} alt="" />
                                <div className="flex flex-col justify-between">
                                    <div className="text-aqua text-sm font-semibold">Size:</div>
                                    <div className="text-black text-xs">16 x 30</div>
                                </div>
                            </div>
                            <div className="bg-gray-gradient w-full space-x-2 flex items-center p-1.5 rounded-full">
                                <img src={ASSETS.ICONS.QUOTE.iDECKING.src} alt="" />
                                <div className="flex flex-col justify-between">
                                    <div className="text-aqua text-sm font-semibold">Decking</div>
                                    <div className="text-black text-xs">Spray Deck</div>
                                </div>
                            </div>
                            <div className="bg-gray-gradient w-full space-x-2 flex items-center p-1.5 rounded-full">
                                <img src={ASSETS.ICONS.QUOTE.iSPA.src} alt="" />
                                <div className="flex flex-col justify-between">
                                    <div className="text-aqua text-sm font-semibold">Spa</div>
                                    <div className="text-black text-xs">Round</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mx-auto absolute -bottom-5">
                    <ColoredButton
                        onHandleClick={() => router.push('/')}
                        title={"Buy Now"} textColor="text-white" background={'bg-aqua'} borderColor={'border-aqua'} />
                </div>
            </div>

        </div>
    );
}

export default memo(Quote)