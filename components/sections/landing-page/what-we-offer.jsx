import React, { memo } from 'react'
import dynamic from 'next/dynamic';
const WeOffers = dynamic(() => import('@/components/carousel/offers'), { ssr: false });
const WhatWeOffer = () => {
    return (
        <section
            id="what-we-offer"
            className="pt-20  bg-gray-background flex items-center justify-end">
            <div className="w-11/12">
                <div>
                    <WeOffers />
                </div>
            </div>
        </section>

    )
}

export default memo(WhatWeOffer)