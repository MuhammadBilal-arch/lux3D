import { ASSETS } from '@/public/path'
import React, { memo } from 'react'

const DataAnalysis = () => {
    return (
        <section
            id="analytics"
            className="bg-gray-background  pt-20  mx-auto space-y-16">
            <div className="w-full flex flex-col items-center">
                <div className="bg-aqua px-8 py-2 text-white rounded-[30px] z-10 -mb-7 border-2 border-white text-3xl"><span>Data</span> <span className="font-semibold">ANALYSIS</span></div>
                <div className="bg-aqua-1000 self-end w-11/12 min-h-96 rounded-tl-[30px] rounded-bl-[70px]">
                    <div className="w-full flex flex-col lg:flex-row items-center min-h-[28rem] p-5 lg:p-0">

                        <div
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            className="lg:w-1/2 lg:-mb-52">
                            <img src={ASSETS.DATA_ANALYSIS.DATA_ANALYSIS_CHART.src} alt="" className="max-h-[28rem] min-h-[28rem] w-full" />
                        </div>
                        <div className="lg:w-1/2 lg:-mb-52 flex flex-col items-start min-h-[28rem] justify-start text-white space-y-8">

                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                className="flex items-center space-x-4 w-full">
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
                            <div
                                data-aos="fade-left"
                                data-aos-duration="2000"
                                className="flex items-center space-x-4 w-full">
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
                            <div
                                data-aos="fade-left"
                                data-aos-duration="3000"
                                className="flex items-center space-x-4 w-full">
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

    )
}

export default memo(DataAnalysis)