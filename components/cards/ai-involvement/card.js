import React from 'react'

export const AiInvolvementCard = ({  icon, headingOne, paragraph , bgColor , textColor , onSelectType , id , selectType}) => {
    return (
        <div 
        onClick={()=> onSelectType(id)}
        className={`py-4 cursor-pointer lg:py-10 px-4 lg:px-5 rounded-2xl ${selectType === id ? 'bg-aqua text-white': 'bg-white text-black'}  `}>
            <img src={icon.src} alt=''
                className='min-h-16 max-h-16 w-full rounded-2xl' />
            <div className='text-center mt-10'>
            <div className='font-medium'>
                {headingOne}
            </div>
            <div className={`text-xs font-light lg:text-sm mt-1 ${selectType === id ? 'text-white' : 'text-gray-text'}`}>
                {paragraph}
            </div>
            </div>

        </div>
    )
}
