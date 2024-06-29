'use client'

import { ChevronUpIcon } from '@radix-ui/react-icons';
import { memo, useEffect, useState } from 'react';

const ScrollToTopButton = ({ scrollHeight = 400 }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > scrollHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}
            aria-label="Scroll to Top"
        >
            <ChevronUpIcon className="h-6 w-6" />
        </button>
    );
};

export default memo(ScrollToTopButton);
