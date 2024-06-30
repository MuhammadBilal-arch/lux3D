import { ASSETS } from '@/public/path'
import React from 'react'
import { ProjectCard } from "@/components/cards/projects/card";
const OurProjects = () => {
    return (
        <section
            id="our-projects"
            className="bg-gray-background py-20">
            <div
                data-aos="fade-down"
                className="bg-aqua rounded-3xl w-11/12 md:w-10/12 mx-auto min-h-96 py-10 px-4 md:px-10 space-y-10"
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

    )
}

export default OurProjects