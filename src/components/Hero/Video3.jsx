import React, { useState, useEffect, useRef } from 'react';

// Slide definition (JS version, no TS interfaces)
const slides = [
  { id: 1, src: 'https://tecdn.b-cdn.net/img/video/Tropical.mp4', label: 'First slide label', caption: 'Some representative placeholder content for the first slideSome representative placeholder content for the first slideSome representative placeholder content for the first slide.' },
  { id: 2, src: 'https://tecdn.b-cdn.net/img/video/forest.mp4', label: 'Second slide label', caption: 'Some representative placeholder content for the second slideSome representative placeholder content for the first slideSome representative placeholder content for the first slide.' },
  { id: 3, src: 'https://tecdn.b-cdn.net/img/video/Agua-natural.mp4', label: 'Third slide label', caption: 'Some representative placeholder content for the first slideSome representative placeholder content for the first slideSome representative placeholder content for the third slide.' },
];

export default function VideoCarouselBasicExample() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent(prev => (prev + 1) % slides.length),
      5000
    );
    return () => resetTimeout();
  }, [current]);

  const prevSlide = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[660px] overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map(slide => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <video className="w-full h-auto" autoPlay loop muted>
              <source src={slide.src} type="video/mp4" />
            </video>
            <div className="absolute inset-x-[10%] top-50 py-4 text-left text-white md:block">
              <h5 className="text-xl">{slide.label}</h5>
              <p className='w-2xl' >{slide.caption}</p>
              <button>Connect With Us</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2">
        ‹
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2">
        ›
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
}
