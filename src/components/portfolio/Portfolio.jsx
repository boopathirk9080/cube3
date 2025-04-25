import React, { useEffect, useState } from 'react';
import { portfolio } from '../data/data';
import { FaChevronLeft, FaChevronRight, FaTimes, FaEye } from 'react-icons/fa';
import Aos from 'aos';

function Portfolio() {
    const [list, setList] = useState(portfolio);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const allCategory = ["All", ...new Set(portfolio.map((item) => item.category))];
    const [category] = useState(allCategory);

    // Filter function remains the same
    const filterItems = (category) => {
        category === "All" ? setList(portfolio) : setList(portfolio.filter(item => item.category === category));
    };

    // Image modal controls
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
        <article className="py-12 px-4 sm:px-6 lg:px-8 w-full  bg-gradient-to-t from-[#134156] to-[#010810]">
            {/* Portfolio Header */}
            <div className="text-center mb-8 sm:mb-12 max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Portfolio</h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {category.map(cat => (
                        <button
                            key={cat}
                            onClick={() => filterItems(cat)}
                            className="px-4 py-2 bg-[#14305a] text-white rounded-lg hover:bg-blue-900 transition-colors text-sm sm:text-base"
                        >
                            {cat}
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
                            className="w-full h-48 object-cover cursor-pointer border-2 rounded-2xl border-blue-300 hover:border-blue-500 transition-all"
                            onClick={() => openImageModal(item.coverimg, index)}
                        />
                        {/* <div className="p-4">
                            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                            <p className="text-blue-200 text-sm">{item.name}</p>
                            <FaEye className="text-blue-400 mt-2 inline-block" />
                        </div> */}
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={closeImageModal}>
                    <div className="relative max-w-[95vw] w-full px-4" onClick={e => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            className="fixed top-4 right-4 bg-gray-50 hover:bg-gray-200 text-red-700 p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white z-50"
                            onClick={closeImageModal}
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        {/* Centered Image Container */}
                        <div className="relative max-h-[90vh] max-w-4xl mx-auto flex items-center justify-center">
                            <img
                                src={selectedImage}
                                alt="Full view"
                                className="max-h-[80vh] sm:max-h-[90vh] w-auto object-contain rounded-2xl focus:outline-none"
                                tabIndex="0"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <button
                            className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-800 p-3 rounded-2xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white z-50"
                            onClick={(e) => navigateImages('prev', e)}
                        >
                            <FaChevronLeft className="text-white text-2xl" />
                        </button>

                        <button
                            className="hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-800 p-3 rounded-2xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white z-50"
                            onClick={(e) => navigateImages('next', e)}
                        >
                            <FaChevronRight className="text-white text-2xl" />
                        </button>

                        {/* Mobile Navigation */}
                        <div className="sm:hidden fixed bottom-4 left-0 right-0 flex justify-center items-center gap-6 z-50">
                            <button
                                className="p-3 bg-blue-800/90 text-white rounded-2xl hover:bg-blue-900 focus:outline-none"
                                onClick={(e) => navigateImages('prev', e)}
                            >
                                <FaChevronLeft className="text-xl" />
                            </button>
                            <button
                                className="p-3 bg-blue-800/90 text-white rounded-2xl hover:bg-blue-900 focus:outline-none"
                                onClick={(e) => navigateImages('next', e)}
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

export default Portfolio;