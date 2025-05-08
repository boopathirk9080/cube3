import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import img1 from "../assets/events/birthday.png";
import img2 from "../assets/events/corporate.png";
import img3 from "../assets/events/personal.png";
import img4 from "../assets/events/wedding.png";

const ParallaxSlider = () => {
    const slides = [
        { id: 1, image: img1, title: "Epic Events" },
        { id: 2, image: img2, title: "Unforgettable Moments" },
        { id: 3, image: img3, title: "Premium Experiences" },
        { id: 4, image: img4, title: "Luxury Execution" },
    ];

    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // calculate active index
    const progressToIndex = useTransform(
        scrollYProgress,
        Array.from({ length: slides.length + 1 }, (_, i) => i / slides.length),
        Array.from({ length: slides.length + 1 }, (_, i) => Math.min(i, slides.length - 1))
    );
    useEffect(() => {
        const unsub = progressToIndex.on("change", (v) =>
            setActiveIndex(Math.round(v))
        );
        return unsub;
    }, [progressToIndex]);

    return (
        <div className="h-[400vh] w-full bg-white" ref={containerRef}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {slides.map((slide, index) => {
                    // each slide covers exactly its 100vh segment
                    const slideStart = index / slides.length;
                    const slideEnd = (index + 1) / slides.length;

                    // translateY from 0 → -100% over that segment
                    const y = useTransform(
                        scrollYProgress,
                        [slideStart, slideEnd],
                        ["70%", "-100%"]
                    );
                    // opacity: 0 until slideStart, ramp to 1, then back to 0 at slideEnd
                    const opacity = useTransform(
                        scrollYProgress,
                        [slideStart, slideStart + 0.01, slideEnd - 0.01, slideEnd],
                        [0, 1, 1, 0]
                    );
                    // scale: slight zoom in at center
                    const scale = useTransform(
                        scrollYProgress,
                        [slideStart, (slideStart + slideEnd) / 2, slideEnd],
                        [0.9, 1, 0.9]
                    );

                    return (
                        <motion.section
                            key={slide.id}
                            className="absolute top-0 left-0 h-screen w-full"
                            style={{ y, opacity, scale, zIndex: slides.length - index }}
                        >
                            <div className="relative h-full w-full">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                />
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="h-full w-full object-cover object-center"
                                />
                                <motion.div
                                    className="absolute left-10 top-1/2 -translate-y-1/2 text-white md:left-20"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                                        {slide.title}
                                    </h2>
                                    <p className="mt-4 max-w-md text-lg md:text-xl">
                                        Experience the pinnacle of event management with our
                                        exclusive luxury services.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.section>
                    );
                })}

                {/* Navigation Dots */}
                <div className="absolute bottom-10 right-10 z-50 flex space-x-4">
                    {slides.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-3 w-3 cursor-pointer rounded-full ${activeIndex === index ? "bg-white" : "bg-white/50"
                                }`}
                            onClick={() => {
                                const segment = containerRef.current.offsetHeight / slides.length;
                                window.scrollTo({
                                    top: segment * index,
                                    behavior: "smooth",
                                });
                            }}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParallaxSlider;
