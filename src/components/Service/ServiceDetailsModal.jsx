import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { MdDoubleArrow } from "react-icons/md";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"; // For navigation to the gallery

const ServiceDetailsModal = ({ service, isOpen, onClose }) => {
    const navigate = useNavigate(); // Hook for navigation
    const handleGalleryRedirect = () => {
        onClose();
        setTimeout(() => {
            // Changed service.category to service.Category to match your data
            navigate(`/gallery?category=${encodeURIComponent(service.Category)}`);
        }, 100);
    };
    if (!service) return null;

    return (
        <AnimatePresence mode="sync">
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gray bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="bg-[#ffff] rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <div className="h-64 md:h-80 overflow-hidden rounded-t-xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                </div>

                                <motion.button
                                    className="absolute top-4 right-4 bg-[#ffff] bg-opacity-70 text-white rounded-full h-10 w-10 flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                >
                                    <i className="fas fa-times"></i>
                                </motion.button>
                            </div>

                            <div className="p-6 md:p-8">
                                <h2 className="text-2xl text-[#ef4949] md:text-3xl font-montserrat font-bold mb-4">
                                    {service.id} <span className="text-black" >Events</span>
                                </h2>

                                <div className="mb-6">
                                    <p className="text-black mb-6">{service.detailedDescription}</p>

                                    <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#ef4949]">

                                        {service.title}<span className="text-black" >Services</span>
                                    </h3>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <MdDoubleArrow className="text-[#ef4949] mr-2 mt-1" />
                                                <span className="text-black">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4 border-t border-[#333333]">
                                    <button
                                        className="bg-[#711a1a] hover:bg-[#711a1aae] border-2 border-[#ffff] text-white px-8 py-4 rounded-full font-semibold transition-all btn-glow"
                                        onClick={handleGalleryRedirect} // Updated handler
                                    >
                                        <FontAwesomeIcon icon="fa-solid fa-image" className="mr-2" />
                                        Check our works
                                    </button>
                                    <button
                                        className="border-2 flex items-center border-[#ffff] bg-[#128C7E]  hover:bg-[#128c7ead]  text-white px-8 py-4 rounded-full font-semibold transition-all red-glow"
                                        onClick={() =>
                                            window.open(
                                                `https://wa.me/9080787009?text=Hello, I am interested in your ${service.title} services.`,
                                                "_blank"
                                            )
                                        }
                                    >
                                        <BiLogoWhatsapp className="text-xl mr-2" />
                                        Let's Talk
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// ServiceDetailsModal.propTypes = {
//     service: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         detailedDescription: PropTypes.string.isRequired,
//         features: PropTypes.arrayOf(PropTypes.string).isRequired,
//         pricing: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired,
//         testimonial: PropTypes.shape({
//             quote: PropTypes.string.isRequired,
//             author: PropTypes.string.isRequired,
//             position: PropTypes.string,
//         }),
//     }),
//     isOpen: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
// };

export default ServiceDetailsModal;
