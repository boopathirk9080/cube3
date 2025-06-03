// import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
// import { MdDoubleArrow } from "react-icons/md";
// import { BiLogoWhatsapp, BiPhotoAlbum } from "react-icons/bi";
// import { TbPhotoHeart } from "react-icons/tb";
// import { useNavigate } from "react-router-dom"; // For navigation to the gallery;
// import { IoClose } from "react-icons/io5";
// import { gallery } from '../data/data'; // Update path as needed
// import Aos from "aos";
// const ServiceDetailsModal = ({ service, isOpen, onClose }) => {
//     const navigate = useNavigate(); // Hook for navigation
//     const handleGalleryRedirect = () => {
//         onClose();
//         setTimeout(() => {
//             // Changed service.category to service.Category to match your data
//             navigate(`/gallery?category=${encodeURIComponent(service.Category)}`);
//         }, 100);
//     };
//     if (!service) return null;
//     // In ServiceDetailsModal component
//     // Add this before the return statement:

//     // Get all unique categories from gallery
//     const galleryCategories = [...new Set(gallery.map(item => item.category))];

//     // Check if current service's category exists in gallery
//     const hasGalleryCategory = galleryCategories.includes(service.Category);
//     return (
//         <AnimatePresence mode="sync">

//             <AnimatePresence>
//                 {isOpen && (<motion.div
//                     // initial={{ opacity: 0 }}
//                     // animate={{ opacity: 1 }}


//                     // transition={{ duration: 0.5 }}
//                     className="fixed inset-0 bg-gray bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
//                     onClick={onClose}
//                     // data-aos="fade-up"
//                     exit={{ opacity: 0 }}
//                 >
//                     <motion.div
//                         initial={{ scale: 0.95, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0.95, opacity: 0 }}
//                         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                         className="bg-[#fabfc1] rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <div className="relative">
//                             <div className="h-64 md:h-80 overflow-hidden rounded-t-xl">
//                                 <img
//                                     src={service.image}
//                                     alt={service.title}
//                                     className="w-full h-full object-cover"
//                                 />

//                                 <div className="relative inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
//                                 <motion.button
//                                     className=" absolute top-8 right-8 z-50 font-extrabold text-white text-2xl cursor-pointer bg-[#df3939] hover:bg-[#ac2626] bg-opacity-70 rounded-full h-10 w-10 flex items-center justify-center"
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                     onClick={onClose}
//                                     exit={{ opacity: 0 }}
//                                 >
//                                     <IoClose />
//                                 </motion.button>
//                                 {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div> */}
//                             </div>
//                             {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div> */}
//                             {/* <motion.button
//                                     className="   sticky top-8 right-8 z-50 font-extrabold text-white text-2xl cursor-pointer bg-[#df3939] hover:bg-[#ac2626] bg-opacity-70 rounded-full h-10 w-10 flex items-center justify-center"
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                     onClick={onClose}
//                                     exit={{ opacity: 0 }}
//                                 >
//                                     <IoClose />
//                                 </motion.button> */}
//                         </div>



//                         <div className="p-4 md:p-8">
//                             <h2 className="text-2xl text-[#ef4949] md:text-3xl font-montserrat font-bold mb-4">
//                                 {service.id} <span className="text-black" >Events</span>
//                             </h2>

//                             <div className="mb-6">
//                                 <p className="text-black text-justify mb-6">{service.detailedDescription}</p>

//                                 <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#ef4949]">

//                                     {service.title}<span className="text-black" >Services</span>
//                                 </h3>

//                                 <ul className="space-y-2 mb-6">
//                                     {service.features.map((feature, index) => (
//                                         <motion.li
//                                             key={index}
//                                             className="flex items-start"
//                                             initial={{ opacity: 0, x: -10 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: index * 0.1 }}
//                                         >
//                                             <MdDoubleArrow className="text-[#ef4949] mr-2 mt-1" />
//                                             <span className="text-black">{feature}</span>
//                                         </motion.li>
//                                     ))}
//                                 </ul>
//                             </div>



//                             <div className="sticky bottom-[0px] pb-3   inset-x-0 mx-auto max-w-full lg:px-4 px-4 flex flex-wrap gap-4 pt-4 border-t rounded-sm bg-[#f8b0b2] z-50">
//                                 {/* <button
//                                         className="bg-[#711a1a] flex lg:text-xl text-2xl  w-full lg:w-auto  hover:bg-[#711a1aae] border-2 border-white  text-white lg:px-8 px-4 lg:py-4 py-3 rounded-xl font-semibold transition-all btn-glow"
//                                         onClick={handleGalleryRedirect}
//                                     >
//                                         <TbPhotoHeart className="lg:text-3xl text-4xl mr-2" />
//                                         Check our works
//                                     </button> */}
//                                 {hasGalleryCategory && (
//                                     <button
//                                         className="bg-[#711a1a] flex lg:text-xl text-2xl cursor-pointer  w-full lg:w-auto  hover:bg-[#711a1aae]  text-white lg:px-8 px-4 lg:py-4 py-3 rounded-xl font-semibold transition-all btn-glow"
//                                         onClick={handleGalleryRedirect}
//                                     >
//                                         <BiPhotoAlbum className="lg:text-3xl text-4xl mr-2" />

//                                         {/* <TbPhotoHeart className="lg:text-3xl text-4xl mr-2" /> */}
//                                         Check our works
//                                     </button>
//                                 )}
//                                 <button
//                                     className=" lg:text-xl text-2xl w-full lg:w-auto cursor-pointer flex items-center  bg-[#128C7E] hover:bg-[#128c7ead] text-white lg:px-8 px-4 lg:py-4 py-3 rounded-xl font-semibold transition-all "
//                                     onClick={() =>
//                                         window.open(
//                                             `https://wa.me/9080787009?text=Hello, I am interested in your ${service.title} services.`,
//                                             "_blank"
//                                         )
//                                     }
//                                 >
//                                     <BiLogoWhatsapp className="lg:text-3xl text-4xl mr-2" />
//                                     Let's Talk
//                                 </button>
//                             </div>
//                         </div>

//                     </motion.div>
//                 </motion.div>)}
//             </AnimatePresence>

//         </AnimatePresence>
//     );
// };



// export default ServiceDetailsModal;
// // ServiceDetailsModal.propTypes = {
// //     service: PropTypes.shape({
// //         id: PropTypes.string.isRequired,
// //         title: PropTypes.string.isRequired,
// //         image: PropTypes.string.isRequired,
// //         detailedDescription: PropTypes.string.isRequired,
// //         features: PropTypes.arrayOf(PropTypes.string).isRequired,
// //         pricing: PropTypes.string.isRequired,
// //         icon: PropTypes.string.isRequired,
// //         testimonial: PropTypes.shape({
// //             quote: PropTypes.string.isRequired,
// //             author: PropTypes.string.isRequired,
// //             position: PropTypes.string,
// //         }),
// //     }),
// //     isOpen: PropTypes.bool.isRequired,
// //     onClose: PropTypes.func.isRequired,
// // };



// import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
// import { MdDoubleArrow } from "react-icons/md";
// import { BiLogoWhatsapp, BiPhotoAlbum } from "react-icons/bi";
// import { useNavigate } from "react-router-dom"; // For navigation to the gallery;
// import { IoClose } from "react-icons/io5";
// import { gallery } from '../data/data'; // Update path as needed
// const ServiceDetailsModal = ({ service, isOpen, onClose }) => {
//     const navigate = useNavigate(); // Hook for navigation
//     const handleGalleryRedirect = () => {
//         onClose();
//         setTimeout(() => {
//             // Changed service.category to service.Category to match your data
//             navigate(`/gallery?category=${encodeURIComponent(service.Category)}`);
//         }, 100);
//     };
//     if (!service) return null;
//     // In ServiceDetailsModal component
//     // Add this before the return statement:

//     // Get all unique categories from gallery
//     const galleryCategories = [...new Set(gallery.map(item => item.category))];

//     // Check if current service's category exists in gallery
//     const hasGalleryCategory = galleryCategories.includes(service.Category);
//     return (
//         <AnimatePresence mode="sync" >

//             <AnimatePresence>
//                 {isOpen && (<motion.div
//                     className="fixed inset-0 bg-gray bg-opacity-70   backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
//                     onClick={onClose}
//                     exit={{ opacity: 0 }}
//                 >
//                     <motion.div
//                         initial={{ scale: 0.95, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0.95, opacity: 0 }}
//                         transition={{ type: 'spring', stiffness: 300, damping: 30 }}

//                         className="bg-[#fabfc1]  shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto  rounded-xl"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <div className="relative">
//                             <div className="h-64 md:h-80 overflow-hidden ">
//                                 <img
//                                     src={service.image}
//                                     alt={service.title}
//                                     className="w-full h-full object-cover"
//                                 />

//                                 <div className="relative inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
//                                 <motion.button
//                                     className=" absolute top-8 right-8 z-5 font-extrabold text-white text-2xl cursor-pointer bg-[#df3939] hover:bg-[#ac2626] bg-opacity-70 rounded-full h-10 w-10 flex items-center justify-center"
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                     onClick={onClose}
//                                     exit={{ opacity: 0 }}
//                                 >
//                                     <IoClose />
//                                 </motion.button>
//                             </div>

//                         </div>



//                         <div className="p-4 md:p-8">
//                             <h2 className="text-2xl text-[#ef4949] md:text-3xl font-montserrat font-bold mb-4">
//                                 {service.id} <span className="text-black" >Events</span>
//                             </h2>

//                             <div className="mb-6">
//                                 <p className="text-black text-justify mb-6">{service.detailedDescription}</p>

//                                 <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#ef4949]">

//                                     {service.title}<span className="text-black" >Services</span>
//                                 </h3>

//                                 <ul className="space-y-2 mb-6">
//                                     {service.features.map((feature, index) => (
//                                         <motion.li
//                                             key={index}
//                                             className="flex items-start"
//                                             initial={{ opacity: 0, x: -10 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: index * 0.1 }}
//                                         >
//                                             <MdDoubleArrow className="text-[#ef4949] mr-2 mt-1" />
//                                             <span className="text-black">{feature}</span>
//                                         </motion.li>
//                                     ))}
//                                 </ul>
//                             </div>



//                             <div className="sticky bottom-[0px] pb-3   inset-x-0 mx-auto max-w-full lg:px-4 px-4 flex flex-wrap gap-4 pt-4 border-t rounded-sm bg-[#f8b0b2] z-50">

//                                 {hasGalleryCategory && (
//                                     <button
//                                         className="bg-[#711a1a] flex lg:text-xl text-2xl cursor-pointer  w-full lg:w-auto  hover:bg-[#711a1aae]  text-white lg:px-8 px-4 lg:py-4 py-3 rounded-xl font-semibold transition-all btn-glow"
//                                         onClick={handleGalleryRedirect}
//                                     >
//                                         <BiPhotoAlbum className="lg:text-3xl text-4xl mr-2" />
//                                         Check our works
//                                     </button>
//                                 )}
//                                 <button
//                                     className=" lg:text-xl text-2xl w-full lg:w-auto cursor-pointer flex items-center  bg-[#128C7E] hover:bg-[#128c7ead] text-white lg:px-8 px-4 lg:py-4 py-3 rounded-xl font-semibold transition-all "
//                                     onClick={() =>
//                                         window.open(
//                                             `https://wa.me/9080787009?text=Hello, I am interested in your ${service.title} services.`,
//                                             "_blank"
//                                         )
//                                     }
//                                 >
//                                     <BiLogoWhatsapp className="lg:text-3xl text-4xl mr-2" />
//                                     Let's Talk
//                                 </button>
//                             </div>
//                         </div>

//                     </motion.div>
//                 </motion.div>)}
//             </AnimatePresence>

//         </AnimatePresence>
//     );
// };



// export default ServiceDetailsModal;









import { AnimatePresence, motion } from "framer-motion";
import { MdDoubleArrow } from "react-icons/md";
import { BiLogoWhatsapp, BiPhotoAlbum } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { gallery } from '../data/data';

const ServiceDetailsModal = ({ service, isOpen, onClose }) => {
    const navigate = useNavigate();
    
    const handleGalleryRedirect = () => {
        onClose();
        setTimeout(() => {
            navigate(`/gallery?category=${encodeURIComponent(service.Category)}`);
        }, 100);
    };

    if (!service) return null;
    
    const galleryCategories = [...new Set(gallery.map(item => item.category))];
    const hasGalleryCategory = galleryCategories.includes(service.Category);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 p-2 z-50 backdrop-blur-sm"
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/30" 
                        onClick={onClose} 
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative mx-auto my-8 max-w-4xl bg-[#fabfc1] shadow-xl rounded-xl"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {/* Close Button */}
                        <motion.button
                            className="absolute top-4 lg:right-8 right-4 font-extrabold cursor-pointer text-white text-2xl bg-[#df3939] bg-opacity-70 rounded-full h-10 w-10 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                        >
                            <IoClose />
                        </motion.button>

                        <div className="max-h-[90vh] rounded-xl overflow-y-auto">
                            {/* Service Image */}
                            <div className="h-64 md:h-80 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Service Content */}
                            <div className="p-6">
                                <h2 className="text-2xl text-[#ef4949] md:text-3xl font-montserrat font-bold mb-4">
                                    {service.id} <span className="text-black">Events</span>
                                </h2>

                                <p className="text-black text-justify mb-6">
                                    {service.detailedDescription}
                                </p>

                                <h3 className="text-xl font-montserrat font-semibold mb-3 text-[#ef4949]">
                                    {service.title}<span className="text-black"> Services</span>
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

                                {/* Action Buttons */}
                                <div className="sticky bottom-0 pb-3 inset-x-0 mx-auto max-w-full flex flex-wrap gap-4 px-[20px] pt-4 border-t rounded-sm bg-[#f8b0b2] z-50">
                                    {hasGalleryCategory && (
                                        <button
                                            className="bg-[#711a1a] flex lg:text-xl text-2xl cursor-pointer w-full lg:w-auto hover:bg-[#711a1aae] text-white lg:px-8 px-4 lg:py-4 py-3 rounded-xl font-semibold transition-all btn-glow"
                                            onClick={handleGalleryRedirect}
                                        >
                                            <BiPhotoAlbum className="lg:text-3xl text-4xl mr-2" />
                                            Check our works
                                        </button>
                                    )}
                                    <button
                                        className="lg:text-xl text-2xl w-full lg:w-auto cursor-pointer flex items-center bg-[#128C7E] hover:bg-[#128c7ead] text-white lg:px-8 px-4 lg:py-4 py-3 rounded-xl font-semibold transition-all"
                                        onClick={() => window.open(
                                            `https://wa.me/9080787009?text=Hello, I am interested in your ${service.title} services.`,
                                            "_blank"
                                        )}
                                    >
                                        <BiLogoWhatsapp className="lg:text-3xl text-4xl mr-2" />
                                        Let's Talk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ServiceDetailsModal;