'use client'
import { useState } from 'react';

const RangeSlider = () => {
    const [value, setValue] = useState(92);

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };

    const percentage = ((value - 10) / (200 - 10)) * 100;

    return (
        <div className="relative w-64 m-auto flex items-center h-16  justify-center">
            <div className="relative py-1 w-full">
                <input
                    type="range"
                    min="50"
                    max="200"
                    value={value}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={handleSliderChange}
                />
                <div className="relative h-2 bg-gray-200 rounded-full">
                    <div className="absolute h-2 rounded-full bg-transparent" style={{ width: `${percentage}%` }}></div>
                    <div
                        className="absolute h-4 w-4 rounded-full bg-[#385B7E] shadow  -ml-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                        style={{ left: `${percentage}%` }}
                    >
                        <div className="relative -mt-2 w-1">
                            <div className="absolute z-40 opacity-100  bottom-100 mb-2 left-7 min-w-full" style={{ marginLeft: '-20.5px' }}>
                                <div className="relative shadow-md">
                                    <div className="bg-white -mt-3.5 text-black truncate text-[0.7rem] rounded-full rounded-bl-2xl py-0.5 px-3">$ {value}k</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute text-white -ml-1 bottom-0 left-0 -mb-6 text-sm ">$ 50k</div>
                    <div className="absolute text-white -mr-1 bottom-0 right-0 -mb-6 text-sm">$ 200k</div>
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;
