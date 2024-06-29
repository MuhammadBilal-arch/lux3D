'use client'
import { memo, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
    ColoredButton,
    TransparentButton,
} from "@/components/buttons";
import { ASSETS } from "@/public/path";
import { AiInvolvementCard } from "@/components/cards/ai-involvement/card";
import Head from "next/head";

const AiInvolvement = () => {
    const [selectType, setSelectType] = useState(2)
    const [loading,setLoading] = useState(true)

    const onSelectType = useCallback((id) => {
        setSelectType(id)
    })

    return (
        <div className="max-w-[1440px] mx-auto relative overflow-hidden">
            <Head>
                <title>Ai Involvement - Lux 3D</title>
                <meta name="ai invovlement" content="The perfect pool & wellness experience" />
                <link rel="preload" href={ASSETS.BACKGROUND.bgAI_SCREEN.src} as="image" />
            </Head>

            <main
                className={`
                relative
                w-full   
                mx-auto flex min-h-96 md:min-h-screen max-h-screen 2xl:min-h-screen  px-5 sm:px-12 md:px-14 lg:px-20`}
            >
                <div className="absolute left-0 w-full h-full lg:h-auto  2xl:h-full">
                    <Image
                        src={ASSETS.BACKGROUND.bgAI_SCREEN.src}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        priority={true} // Ensures it loads as a high priority image
                        className=" md:min-h-screen  h-full  w-full object-cover"
                    />
                </div>
                <div className="flex items-center justify-center text-center w-full z-10 py-10">
                    <div className=" space-y-4 md:space-y-6 lg:space-y-8 ">
                        <div className="relative heading-1 text-white font-semibold z-10">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 relative mx-auto">
                                <Image
                                    src={ASSETS.LOGO.LOGO_WHITE.src}
                                    alt="Logo"
                                    layout="responsive"
                                    width={100} // Set the width in pixels
                                    height={100} // Set the height in pixels
                                    priority={true} // Ensures it loads as a high priority image
                                    quality={75}
                                    onLoad={() => setLoading(false)}
                                    onError={() => setLoading(true)}
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-10/12 mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl  lg:leading-[50px] uppercase">
                                How involved you like to be in  your new pool design project?
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
                            <AiInvolvementCard
                                onSelectType={onSelectType}
                                icon={ASSETS.ICONS.AI_INVOLVEMENT.iAiNotInvolved}
                                headingOne={'Not At all involved'}
                                paragraph={'I prefer to leave the pool design entirely in the hands of professionals without any personal input.'}
                                id={1}
                                selectType={selectType}
                            />
                            <AiInvolvementCard
                                icon={ASSETS.ICONS.AI_INVOLVEMENT.iAiSomeWhatInvolved}
                                headingOne={'Somewhat Invloved'}
                                paragraph={'I would like to provide some ideas and feedback but rely on experts for the majority of the design work.'}
                                onSelectType={onSelectType}
                                id={2}
                                selectType={selectType}
                            />
                            <AiInvolvementCard
                                icon={ASSETS.ICONS.AI_INVOLVEMENT.iAiVeryInvolved}
                                headingOne={'Very Invloved'}
                                paragraph={'I want to be deeply involved in every step of the design process, making decisions and contributing significantly to the project.'}
                                onSelectType={onSelectType}
                                id={3}
                                selectType={selectType}
                            />
                        </div>

                        <div className="flex items-center justify-center space-x-2">
                            <Link href="/" className="w-32">
                                <TransparentButton title={"Back"} />
                            </Link>
                            <Link href="/upload-plat" className="w-32">
                                <ColoredButton
                                    title={"Next"}
                                    background={'bg-aqua'}
                                    textColor="text-white"
                                    borderColor={'border-aqua'}
                                />
                            </Link>
                        </div>

                    </div>
                </div>
            </main >

        </div >
    );
}

export default memo(AiInvolvement)