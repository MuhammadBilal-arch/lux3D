import React from 'react'

export const Card = ({ image, icon, headingOne, headingTwo, paragraph }) => {
    return (
        <div className='py-4 lg:py-2 px-4 lg:px-4 rounded-2xl bg-white'>

            <div className='relative'>
                <img src={image.src} alt=''
                    style={{ filter: `grayscale(100%)` }}
                    className='md:h-52 w-full rounded-2xl' />
                <div className='absolute left-2 -bottom-5'>
                    <img src={icon?.src} alt=''
                        className='h-14 w-14 object-contain' />
                </div>
            </div>
            <div className='flex items-center space-x-2 mt-8'>
                <div className='font-medium'>
                    {headingOne}
                </div>
                <div className='bg-aqua  text-white rounded-2xl px-3'>
                    {headingTwo}
                </div>
            </div>
            <div className='text-xs text-gray-text font-light lg:text-sm mt-1'>
                {paragraph}
            </div>

        </div>
    )
}
