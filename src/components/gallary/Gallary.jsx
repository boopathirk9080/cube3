import React, { useEffect, useState } from 'react';
import { gallery } from '../data/data';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import Aos from 'aos';
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion";
function Gallery() {



    const [list, setList] = useState(gallery);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const allCategory = ["All", ...new Set(gallery.map((item) => item.category))];
    const [category] = useState(allCategory);
    const [activeCategory, setActiveCategory] = useState('All');
    const location = useLocation();
    useEffect(() => {
    }, [list]);
    useEffect(() => {
        // Get category from URL parameters
        const searchParams = new URLSearchParams(location.search);
        const urlCategory = searchParams.get('category');
        // Then compare with
        if (urlCategory) {
            setActiveCategory(urlCategory);

            filterItems(urlCategory);

        } else {
            filterItems('All');
        }
    }, [location]);
    useEffect(() => {
    }, [list, activeCategory]);
    const filterItems = (category) => {
        const filtered = category === "All"
            ? gallery
            : gallery.filter(item =>
                item.category.toLowerCase() === category.toLowerCase() // Exact match
            );
        setList(filtered);
        setActiveCategory(category);
    };
    const openImageModal = (img, index) => {
        setSelectedImage(img);
        setCurrentIndex(index);
    };

    const closeImageModal = () => setSelectedImage(null);

    const navigateImages = (direction) => {
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % list.length
            : (currentIndex - 1 + list.length) % list.length;
        setCurrentIndex(newIndex);
        setSelectedImage(list[newIndex].coverimg);
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <article className="py-5 mt-10 md:pb-32 px-4  sm:px-6 lg:px-8 w-full bg-gradient-to-t from-[#ffff] to-[#e8e8e849]">
            <div className="text-center mb-8 sm:mb-12 max-w-7xl mx-auto">
                <div>
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl text-black font-montserrat font-bold mb-4">
                            Visuals of   <span className="text-[#ef4949]">Unforgettable</span> Celebrations
                        </h2>
                        <p className="text-[#111] max-w-2xl mx-auto">
                            We handle every aspect of your event with precision and creativity,
                            ensuring a seamless experience from start to finish.
                        </p>
                    </motion.div>

                </div>

                <div className="flex flex-wrap justify-center gap-2">
                    {category.map(cat => (
                        <button
                            key={cat}
                            onClick={() => filterItems(cat)}
                            className={
                                `px-4 py-2 rounded-lg transition-colors text-2xl sm:text-base
                                  ${activeCategory === cat
                                    ? 'bg-blue-300 text-white'
                                    : 'bg-[#14305a] text-white hover:bg-blue-900'}`
                            }
                        >
                          <b> {cat}</b> 
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {list.map((item, index) => (
                    <div key={item.id} className="group relative bg-blue-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                        <img data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            src={item.coverimg}
                            alt={item.title}
                            className="w-full h-48 object-cover cursor-pointer border-2 rounded-2xl border-[#ef4949] hover:border-blue-500 transition-all"
                            onClick={() => openImageModal(item.coverimg, index)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeImageModal}>
                    <div className="relative max-w-[95vw] w-full px-4" onClick={e => e.stopPropagation()}>
                        <button
                            className="fixed top-4 right-4 bg-gray-50 hover:bg-gray-200 text-red-700 p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white z-50"
                            onClick={closeImageModal}
                        >
                            <FaTimes className="text-xl" />
                        </button>
                        <div className="relative max-h-[90vh] max-w-4xl mx-auto flex items-center justify-center">
                            <img
                                src={selectedImage}
                                alt="Full view"
                                className="max-h-[80vh] sm:max-h-[90vh] w-auto object-contain rounded-2xl focus:outline-none"
                                tabIndex="0"
                            />
                        </div>
                        <button
                            className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-800 p-3 rounded-2xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white z-50"
                            onClick={() => navigateImages('prev')}
                        >
                            <FaChevronLeft className="text-white text-2xl" />
                        </button>
                        <button
                            className="hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-800 p-3 rounded-2xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white z-50"
                            onClick={() => navigateImages('next')}
                        >
                            <FaChevronRight className="text-white text-2xl" />
                        </button>
                        <div className="sm:hidden fixed bottom-4 left-0 right-0 flex justify-center items-center gap-6 z-50">
                            <button
                                className="p-3 bg-blue-800/90 text-white rounded-2xl hover:bg-blue-900 focus:outline-none"
                                onClick={() => navigateImages('prev')}
                            >
                                <FaChevronLeft className="text-xl" />
                            </button>
                            <button
                                className="p-3 bg-blue-800/90 text-white rounded-2xl hover:bg-blue-900 focus:outline-none"
                                onClick={() => navigateImages('next')}
                            >
                                <FaChevronRight className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}


export default Gallery;
