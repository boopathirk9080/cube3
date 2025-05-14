import { motion } from 'framer-motion';
import { eventPosts } from './blogdata';
import { useState } from 'react';
import BlogDetails from './BlogDetails';

export default function Blog() {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (post) => {
        setSelectedService(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl text-[#000] font-montserrat font-bold mb-4">
                    Tales of <span className="text-[#ee393e]" >Unforgettable</span> Moments
                </h2>
                <p className="text-[#000000] max-w-2xl mx-auto">
                    We handle every aspect of your event with precision and creativity,
                    ensuring a seamless experience from start to finish.
                </p>
            </motion.div>
            {/* Responsive grid container */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-3 gap-6">
                {eventPosts.map(post => (
                    <motion.article
                        key={post.id}
                        className="bg-white  lg:w-full  rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div onClick={() => openModal(post)}>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="lg:w-full h-full object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-purple-600 font-semibold">
                                    {post.category}
                                </span>
                                <h2 className="text-xl font-bold mb-2 text-gray-800">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            </div>
                        </div>

                        {/* Read More button */}
                        <div className="px-6 pb-4">
                            <button
                                onClick={() => openModal(post)}
                                className="w-full py-2 text-purple-600 hover:text-purple-800 font-medium rounded-lg border border-purple-600 hover:border-purple-800 transition-colors"
                            >
                                Read More
                            </button>
                        </div>
                    </motion.article>
                ))}
            </div>

            <BlogDetails
                service={selectedService}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
}