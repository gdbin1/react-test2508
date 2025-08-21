import React, { useEffect, useState } from 'react';
import slideImage1 from './slideImage/slide1.png'
import slideImage2 from './slideImage/slide2.jpg'
import slideImage3 from './slideImage/slide3.jpg'

const slides = [slideImage1, slideImage2, slideImage3]

const Slide2 = () => {
    const [currentslide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <div className='slidediv'>
                <img
                    src={slides[currentslide]}
                    alt={`Slide ${currentslide + 1}`}
                    className='slide-image' />

            </div>
        </>
    );
};

export default Slide2;