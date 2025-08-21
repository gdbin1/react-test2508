import React, { useState, useEffect } from 'react';
import slideImage1 from './slideImage/slide1.png';
import slideImage2 from './slideImage/slide2.jpg';
import slideImage3 from './slideImage/slide3.jpg';

const slides = [slideImage1, slideImage2, slideImage3];

const Slide4 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='slidediv'>
            <img
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className='slide-image' />
        </div>
    );
};

export default Slide4;