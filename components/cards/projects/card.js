import React from 'react'

export const ProjectCard = ({ image, icon, headingOne, headingTwo, paragraph }) => {
    return (
        <div className='py-4 lg:py-3 px-4 lg:px-3 rounded-2xl bg-white'>
            <img src={image.src} alt=''
                className='min-h-56 w-full rounded-2xl' />
            <div className='flex items-center space-x-2 mt-4'>
                <div className='font-medium'>
                    {headingOne}
                </div>
            </div>
            <div className='text-xs text-gray-text font-light lg:text-sm mt-1'>
                {paragraph}
            </div>

        </div>
    )
}
