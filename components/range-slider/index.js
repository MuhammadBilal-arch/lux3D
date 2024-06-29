'use client'
import { useState, useRef, useEffect, memo } from 'react';

const RangeSlider = () => {
    const [value, setValue] = useState(92);
    const sliderRef = useRef(null);
    const thumbRef = useRef(null);

    const handleSliderChange = (e) => {
        setValue(Number(e.target.value));
    };

    const percentage = ((value - 50) / (200 - 50)) * 100;

    const handleMouseDown = (e) => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        handleMouseMove(e);
    };

    const handleMouseMove = (e) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const offsetX = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
            const newValue = 50 + ((offsetX / rect.width) * (200 - 50));
            setValue(Math.round(newValue));
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (e) => {
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
        handleTouchMove(e.touches[0]);
    };

    const handleTouchMove = (e) => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const offsetX = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
            const newValue = 50 + ((offsetX / rect.width) * (200 - 50));
            setValue(Math.round(newValue));
        }
    };

    const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    };

    useEffect(() => {
        if (thumbRef.current) {
            thumbRef.current.addEventListener('mousedown', handleMouseDown);
            thumbRef.current.addEventListener('touchstart', handleTouchStart);

            return () => {
                if (thumbRef.current) {
                    thumbRef.current.removeEventListener('mousedown', handleMouseDown);
                    thumbRef.current.removeEventListener('touchstart', handleTouchStart);
                }
            };
        }
    }, []);

    return (
        <div className="w-64 m-auto flex items-center h-16 justify-center">
            <div className="py-1 w-full relative" ref={sliderRef}>
                <input
                    type="range"
                    min="50"
                    max="200"
                    value={value}
                    className="w-full h-full opacity-0 absolute cursor-pointer z-20"
                    onChange={handleSliderChange}
                />
                <div className="relative h-2 bg-gray-200 rounded-full">
                    <div className="absolute h-2  rounded-full" style={{ width: `${percentage}%` }}></div>
                    <div
                        className="absolute h-4 w-4 bg-[#385B7E] shadow -ml-2 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-30"
                        style={{ left: `${percentage}%` }}
                        ref={thumbRef}
                    >
                        <div className="relative top-3 left-8 -mt-2 w-1">
                            <div className="absolute   z-40 opacity-100 bottom-full mb-2 left-1/2 transform -translate-x-1/2 min-w-full">
                                <div className="relative shadow-md">
                                    <div className="bg-white text-black truncate text-[0.7rem] rounded-full rounded-bl-2xl py-0.5 px-3">
                                        $ {value}k
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute text-white -ml-1 bottom-0 left-0 -mb-6 text-sm">$ 50k</div>
                <div className="absolute text-white -mr-1 bottom-0 right-0 -mb-6 text-sm">$ 200k</div>
            </div>
        </div>
    );
};

export default memo(RangeSlider);
