// import { LinkedIn, GitHub, Email, Instagram } from "@mui/icons-material";

// function Footer() {
//     return (
//         <footer className="bg-[#0a192f] text-gray-300 py-6">
//             <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">

//                 <p className="text-sm">&copy; {new Date().getFullYear()} Boopathi. All rights reserved.</p>


//                 <div className="flex space-x-4 mt-4 sm:mt-0">
//                     <a href="mailto:boopathi7476@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
//                         <Email fontSize="small" />
//                     </a>
//                     <a href="https://github.com/boopathirk9080" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
//                         <GitHub fontSize="small" />
//                     </a>
//                     <a href="https://www.linkedin.com/in/boopathi-r-718553256/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
//                         <LinkedIn fontSize="small" />
//                     </a>
//                     <a href="https://www.instagram.com/boopathi_rk_?igsh=MW04d2d1cDBjMHhhZg==" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
//                         <Instagram fontSize="small" />
//                     </a>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;


"use client";
import { motion } from "framer-motion";
import { LinkedIn, Instagram, Email, Twitter } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { navLinks } from "../data/data";
import './footer.css';
import Logo from "../assets/logo/cube-events-logo.png";
const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 12
        }
    }
};

function Footer() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05
    });

    // Filter out phone from navigation links
    const filteredLinks = navLinks.filter(link => link.id !== "phone");

    const socials = [
        { icon: <Email />, link: "mailto:contact.cube3events@gmail.com" },
        { icon: <LinkedIn />, link: "https://www.linkedin.com/company/cube3-events/" },
        { icon: <Twitter />, link: "https://x.com/cube3_events" },
        { icon: <Instagram />, link: "https://www.instagram.com/cube3events/" }
    ];

    return (
        <motion.footer
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={footerVariants}
            className="bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-gray-300 py-16 px-4 md:px-8 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ee393e] rounded-full mix-blend-screen blur-3xl opacity-20 animate-pulse" />
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#ee393e] rounded-full mix-blend-screen blur-3xl opacity-15 animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                {/* About Section */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <motion.h3
                        className="text-4xl font-bold bg-gradient-to-r from-[#ee393e] to-[#ff6b6b] bg-clip-text text-transparent"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={Logo} alt="" />
                    </motion.h3>
                    <p className="text-base text-justify leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                        Life is one great celebration. We create immersive corporate experiences
                        that transcend traditional boundaries, blending cutting-edge technology
                        with unforgettable moments that echo through time.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#ee393e] neon-glow">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {filteredLinks.map((link) => (
                            <motion.div
                                key={link.id}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to={link.path}
                                    className="group flex items-center space-x-3 text-base hover:text-[#ee393e] transition-all"
                                >
                                    <span className="w-3 h-3 bg-[#ee393e] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-glow" />
                                    <span className="hover:underline decoration-[#ee393e]">{link.title}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#ee393e] neon-glow">Connect</h3>
                    <div className="flex flex-wrap gap-4">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.4 }
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-xl bg-black/40 hover:bg-[#ee393e]/20 backdrop-blur-lg transition-all duration-300 shadow-hover-glow"
                            >
                                <motion.div
                                    className="text-2xl"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        transition: {
                                            duration: 2 + index,
                                            repeat: Infinity
                                        }
                                    }}
                                >
                                    {social.icon}
                                </motion.div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                variants={itemVariants}
                className="mt-16 pt-8 text-center border-t border-white/10 relative"
            >
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#ee393e] blur-2xl opacity-10 animate-pulse-slow" />
                    <p className="text-sm text-gray-400 relative">
                        © {new Date().getFullYear()} <span 
                            style={{ cursor: "pointer" }}
                            className="font-medium"> CUBE³ EVENTS.</span> All Rights Reserved.
                        <span className="mx-3 text-[#ee393e]">•</span>
                        Developed by <span 
                            style={{ cursor: "pointer" }}
                            
                            className=" font-medium"><a href="https://www.linkedin.com/company/liro-studios">Liro Studios</a></span>
                    </p>
                </div>
            </motion.div>
        </motion.footer>
    );
}

export default Footer;