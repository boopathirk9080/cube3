import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
    {
        id: 1,
        title: "Wedding Planning",
        image: "https://plus.unsplash.com/premium_photo-1728457448784-395cf51deb56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ODAwKjYwMHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        title: "Corporate Events",
        image: "https://plus.unsplash.com/premium_photo-1669075728466-591b89b66969?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Birthday Parties",
        image: "https://images.unsplash.com/photo-1579623003002-841f9dee24d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        title: "Fashion Shows",
        image: "https://images.unsplash.com/photo-1637379660507-649a3a5f1d63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const ParallaxSlider = () => {
    const { scrollY } = useScroll();

    return (
        <section className="py-20 bg-[#f9f9f9]">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {slides.map((slide, index) => {
                    // Parallax & Scale logic
                    const y = useTransform(scrollY, [0, 300], [0, -index * 10]);
                    const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

                    return (
                        <motion.div
                            key={slide.id}
                            style={{ y, scale }}
                            className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <h3 className="text-white text-xl font-semibold">{slide.title}</h3>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ParallaxSlider;
