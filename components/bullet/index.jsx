import React from 'react'

export const Bullet = ({title}) => {
  return (
    <div className='py-2 whitespace-nowrap max-w-min px-5 rounded-3xl bg-green bg-opacity-10 text-green font-semibold text-xs md:text-sm lg:text-base'>{title}</div>
  )
}
