// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import useScrollToTop from "./useScrollToTop";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
// const ScrollToTop = () => {
//     const location = useLocation();
//     useScrollToTop();

//     const [showButton, setShowButton] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowButton(window.scrollY > 300);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return (
//         <>
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={location.pathname}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                 />
//             </AnimatePresence>

//             {/* Sticky Back to Top Button */}
//             {showButton && (
//                 <motion.button
//                     onClick={scrollToTop}
//                     initial={{ opacity: 0, y: 100 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 100 }}
//                     transition={{ duration: 0.3 }}
//                     className="fixed bottom-6 w-[50px] h-[50px] right-6 z-50   bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
//                 >
//                     {/* <FaArrowUp /> */}
//                     <FontAwesomeIcon icon={faSquareCaretUp} bounce />
//                 </motion.button>

//             )}
//         </>
//     );
// };

// export default ScrollToTop;

// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import useScrollToTop from "./useScrollToTop";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";

// const ScrollToTop = () => {
//     const location = useLocation();
//     useScrollToTop();

//     const [showButton, setShowButton] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowButton(window.scrollY > 300);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//   useEffect(() => {
//     // Smoothly scroll to top on every path change
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location]);
// };
//     return (
//         <>
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={location.pathname}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                 />
//             </AnimatePresence>

//             {/* Sticky Back to Top Button */}
//             {showButton && (
//                 <motion.button
//                     onClick={scrollToTop}
//                     initial={{ opacity: 0, y: 100 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 100 }}
//                     transition={{ duration: 0.3 }}
//                     className="fixed bottom-6 right-6 z-50 w-[50px] h-[50px] flex items-center justify-center   text-white shadow-lg rounded-lg"
//                 >
//                     <FontAwesomeIcon
//                         icon={faSquareCaretUp}
//                         bounce
//                         className="text-[28px]  w-full h-full p-2"
//                         color="#ef4949"
//                     />
//                 </motion.button>
//             )}
//         </>
//     );
// };

// export default ScrollToTop;

import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import useScrollToTop from "./useScrollToTop";
import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const ScrollToTop = () => {
    const location = useLocation();
    useScrollToTop();

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        const start = window.scrollY;
        const duration = 600; // milliseconds
        let startTime = null;

        // easeInOutQuad easing function
        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        const animateScroll = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutQuad(progress);

            window.scrollTo(0, start * (1 - ease));

            if (elapsed < duration) {
                window.requestAnimationFrame(animateScroll);
            }
        };

        window.requestAnimationFrame(animateScroll);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                />
            </AnimatePresence>

            {/* Enhanced Smooth Back to Top Button */}
            {showButton && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                    }}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center   text-white shadow-lg rounded-lg transition-colors"
                >
                    <IoMdArrowDropup className=" bg-amber-700  hover:bg-amber-800  text-4xl lg:text-4xl cursor-pointer rounded-[5px] " />
                </motion.button>
            )}
        </>
    );
};

export default ScrollToTop;
