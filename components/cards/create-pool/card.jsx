'use client'
import React, { useState } from 'react';

export const PoolItemsCard = ({ img, name = 'pool-items' }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    return (
        <div className="w-full h-full flex-col space-y-2.5">
            <label htmlFor={img.src} className='cursor-pointer'>
                <img src={img.src} className="rounded-[7px]" alt="" />
            </label>
            <div className='grid place-items-center'>
                <input
                    type="checkbox"
                    id={img.src}
                    name={name}
                    checked={checked}
                    onChange={handleCheck}
                    className={`
                    appearance-none peer
                            col-start-1 row-start-1 shrink-0
                            w-4 h-4 border-4 border-white rounded-full
                            ${checked ? 'bg-aqua' : 'bg-white opacity-30'}
                            `}

                />
                <div
                    className={`                    
                    col-start-1 row-start-1 
                    w-2 h-2 rounded-full 
                    ${checked ? 'bg-aqua' : 'bg-white opacity-45'}
                    `}
                />
            </div>
        </div>
    );
};
