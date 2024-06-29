import { Card } from '@/components/cards/services/card'
import { ASSETS } from '@/public/path'
import React, { memo } from 'react'

const OurServices = () => {
    return (
        < section
            className="bg-gray-background pt-20  mx-auto space-y-16" >
            <div
                data-aos="fade-down"
                className="text-center">
                <div className="text-aqua font-semibold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">Our Services</div>
            </div>

            <div
                data-aos="fade-up"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 lg:w-8/12 mx-auto">
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

        </section >

    )
}

export default memo(OurServices)