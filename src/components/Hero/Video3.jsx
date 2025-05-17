import React, { useState, useEffect, useRef } from 'react';
import Button from '../button/Button';
// Import the video files directly.
import hor1 from '../assets/videos/hor1.mp4';
import hor2 from '../assets/videos/hor2.mp4';
import hor3 from '../assets/videos/hor3.mp4';
// Import the gif files directly.
import ver1 from '../assets/videos/ver1.gif';
import ver2 from '../assets/videos/ver2.gif';
import ver3 from '../assets/videos/ver3.gif';

import HoverText from '../Hero/HoverText/HoverText';
import { Link } from 'react-router-dom';

// Horizontal video slides
const horSlides = [
    // Use the imported variables in the src field.
    { id: 1, src: hor1, label: 'First slide', caption: 'Horizontal web slide 1' },
    { id: 2, src: hor2, label: 'Second slide', caption: 'Horizontal web slide 2' },
    { id: 3, src: hor3, label: 'Third slide', caption: 'Horizontal web slide 3' },
];
// Vertical gif slides for mobile
const vertSlides = [
    // Use the imported variables in the src field.
    { id: 1, src: ver1, label: 'Mobile slide 1', caption: 'Vertical mobile slide 1' },
    { id: 2, src: ver2, label: 'Mobile slide 2', caption: 'Vertical mobile slide 2' },
    { id: 3, src: ver3, label: 'Mobile slide 3', caption: 'Vertical mobile slide 3' },
];

export function VideoCarouselBasicExample() {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const timeoutRef = useRef(null);

    // detect screen width
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        const handler = e => setIsMobile(e.matches);
        handler(mq);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const slides = isMobile ? vertSlides : horSlides;

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => resetTimeout();
    }, [current, slides]);

    const prevSlide = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length);
    const containerRef = useRef(null);
    return (
        <div className="relative w-full   md:h-[760px] top-0 z-0  overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}

            >
                {slides.map(slide => (
                    <div key={slide.id} className="w-full flex-shrink-0 relative"

                    >

                        {isMobile ? (
                            <div className='h-[670px]' >
                                <img src={slide.src} alt={slide.label} className="w-full h-full object-center" />
                            </div>
                            // <div className='h-auto md:h-full'>
                            //     <img src={slide.src} alt={slide.label} className="w-full h-full object-center" />
                            // </div>


                        ) : (
                            <div
                            // data-aos="fade-left"
                            >
                                <video className="w-full h-full object-cover" autoPlay loop muted

                                >
                                    <source src={slide.src} type="video/mp4" />
                                </video>

                            </div>
                        )}

                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-amber-50 bg-[#a0929280] hover:bg-[#8a7e7ebd] text-4xl  hover:bg-opacity-75 rounded-full  pb-4 p-2"
                data-aos="fade-right"
            >
                ‹
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-50 bg-[#a0929280] hover:bg-[#8a7e7ebd] text-4xl  hover:bg-opacity-75 rounded-full pb-4  p-2"
                data-aos="fade-left"
            >
                ›
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-400'}`} />
                ))}
            </div>
            {/* Ismobile */}
            {isMobile ? (
                <div className="absolute inset-x-[5%] md:inset-x-[10%]  top-[40%] md:top-[50%] transform -translate-y-1/2 py-4 text-center text-white">
                    <br /> <br /> <br />
                    <b><h5 className="text-2xl md:text-xl">Content Head</h5></b>
                    <p className="text-[16px] md:text-base w-[100%]   p-[20px] md:w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora voluptatem! Recusandae, vero debitis! Quis  illum cupiditate! Tempore sunt dolorum quis.</p>
                    <Button />
                </div>
            ) : (
                <div className="absolute inset-x-0 md:inset-x-[10%] top-1/2 transform -translate-y-1/2 px-4 md:px-0 text-center md:text-left text-white space-y-6">
                    <h5 className="text-3xl md:text-4xl font-bold tracking-wide">
                        Content Head
                    </h5>

                    {/* <p className="text-base md:text-lg max-w-xl md:max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora voluptatem!
                        Recusandae, vero debitis! Quis laboriosam quasi assumenda aperiam veniam? Molestias quae modi
                        voluptas illum cupiditate! Tempore sunt dolorum quis.
                    </p>
                     */}
                    <div
                        ref={containerRef}
                        style={{ position: 'relative' }}
                        className='w-full md:w-3xl text-left mx-auto md:mx-0 text-base md:text-[20px] max-w-xl leading-relaxed'
                    >
                        <HoverText
                            label={'lorem ipsum dolor sit amet consectetur adipisicing elit. loream Voluptatibus, tempora voluptatem! Recusandae, vero debitis! Quis laboriosam quasi assumenda aperiam veniam? Molestias quae modi voluptas illum cupiditate! Tempore sunt dolorum quis.'}
                            className={'variable-proximity-demo'}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff='linear'
                        />
                    </div>
                    <div className="mt-0 md:mt-6">
                        <Link to="/contact" ><Button />
                        </Link>
                    </div>
                </div>
            )}


        </div >
    );
}

export default VideoCarouselBasicExample;


