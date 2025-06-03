
// import { FiMenu, FiX } from "react-icons/fi"; // Import React Icons
// import { motion, AnimatePresence } from "framer-motion";
// import { navLinks } from "../data/data";
// import { useState } from "react";
// import logo from "../assets/logo/cube-events-logo.png";

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState("home");

//     const drawerVariants = {
//         closed: {
//             x: "100%",
//             transition: {
//                 type: "spring",
//                 damping: 20,
//                 when: "afterChildren",
//                 staggerChildren: 0.05,
//                 staggerDirection: -1,
//             },
//         },
//         open: {
//             x: 0,
//             transition: {
//                 type: "spring",
//                 damping: 20,
//                 when: "beforeChildren",
//                 staggerChildren: 0.1,
//             },
//         },
//     };

//     const itemVariants = {
//         closed: { x: 20, opacity: 0 },
//         open: { x: 0, opacity: 1 },
//     };

//     const handleNavClick = (id) => {
//         setActiveSection(id);
//         setIsOpen(false); // Close the menu after clicking
//     };

//     return (
//         <header className="bg-[#11111195] text-white sticky top-0 w-full z-50">
//             {/* Top Section */}
//             <div className="container mx-auto flex justify-between items-center py-4 px-6">
//                 <a href="/" className="text-xl font-bold">
//                     <img src={logo} alt="Logo" className="h-10" />
//                 </a>
//                 <button
//                     className="md:hidden text-2xl"
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="Toggle navigation menu"
//                 >
//                     {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
//                 </button>
//                 <nav className="hidden md:flex space-x-6">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.id}
//                             href={link.path}
//                             className={`py-2 px-4 rounded-md transition-all duration-300 relative ${activeSection === link.id
//                                 ? "text-[#ef4949]"
//                                 : "hover:text-[#ef4949] text-white"
//                                 }`}
//                             onClick={() => handleNavClick(link.id)}
//                         >
//                             {link.title}
//                             <span
//                                 className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform scale-x-0 transition-transform duration-300 ${activeSection === link.id ? "scale-x-100" : "hover:scale-x-100"
//                                     }`}
//                             ></span>
//                         </a>
//                     ))}
//                 </nav>
//             </div>

//             {/* Mobile Drawer */}
//             <AnimatePresence mode="sync">
//                 {isOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 bg-[#11111195] bg-opacity-50 z-40"
//                             onClick={() => setIsOpen(false)}
//                         />
//                         <motion.div
//                             id="mobileMenu"
//                             className="fixed top-0 right-0 h-full w-4/5 bg-[#111111] shadow-lg z-50"
//                             variants={drawerVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                         >
//                             <div className="p-6">
//                                 <div className="flex justify-between items-center mb-8">
//                                     <a href="/" className="text-xl font-bold">
//                                         <img src={logo} alt="Logo" className="h-10" />
//                                     </a>
//                                     <button
//                                         id="closeMenu"
//                                         className="text-[#EEEEEE] text-2xl"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         <FiX size={30} />
//                                     </button>
//                                 </div>
//                                 <nav className="flex flex-col space-y-4">
//                                     {navLinks.map((link) => (
//                                         <motion.a
//                                             key={link.id}
//                                             href={link.path}
//                                             className={`py-2 text-[#EEEEEE] hover:text-[#ef4949] transition-colors relative ${activeSection === link.id ? "text-[#ef4949]" : ""
//                                                 }`}
//                                             onClick={() => handleNavClick(link.id)}
//                                             variants={itemVariants}
//                                             whileHover={{ x: 5 }}
//                                         >
//                                             {link.title}
//                                             <span
//                                                 className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform scale-x-0 transition-transform duration-300 ${activeSection === link.id ? "scale-x-100" : "hover:scale-x-100"
//                                                     }`}
//                                             ></span>
//                                         </motion.a>
//                                     ))}
//                                     <motion.button
//                                         className="mt-4 bg-[#ef4949] hover:bg-opacity-90 text-[#EEEEEE] px-6 py-3 rounded-full font-semibold transition-all btn-glow"
//                                         variants={itemVariants}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         Book Now
//                                     </motion.button>
//                                 </nav>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };

// export default Header;


// import { FiMenu, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { navLinks } from "../data/data";
// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/logo/cube-events-logo.png";

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [activeSection, setActiveSection] = useState(location.pathname);

//     // Sync active section with URL changes
//     useEffect(() => {
//         setActiveSection(location.pathname);
//     }, [location]);

//     // Handle scroll-based navigation
//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = document.querySelectorAll('section');
//             let current = '';

//             sections.forEach(section => {
//                 const sectionTop = section.offsetTop;
//                 const sectionHeight = section.clientHeight;
//                 if (window.scrollY >= sectionTop - sectionHeight / 3) {
//                     current = section.id;
//                 }
//             });

//             if (current && `/${current}` !== location.pathname) {
//                 navigate(`/${current}`, { replace: true });
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [navigate, location]);

//     const drawerVariants = {
//         closed: { x: "100%", transition: { type: "spring", damping: 20 } },
//         open: { x: 0, transition: { type: "spring", damping: 20 } }
//     };

//     const itemVariants = {
//         closed: { x: 20, opacity: 0 },
//         open: { x: 0, opacity: 1 }
//     };

//     const handleNavClick = (path) => {
//         setActiveSection(path);
//         setIsOpen(false);
//         const section = document.getElementById(path.slice(1));
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <header className="  text-white  sticky top-0 w-full z-50">
//             <div className="container  absolute bg-[#00000058]  mx-auto flex  justify-between items-center py-4 px-6">
//                 <Link to="/" className="text-xl font-bold">
//                     <img src={logo} alt="Logo" className="h-10" />
//                 </Link>
//                 <button
//                     className="md:hidden text-2xl"
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="Toggle navigation menu"
//                 >
//                     {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
//                 </button>
//                 <nav className="hidden md:flex space-x-6">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.id}
//                             to={link.path}
//                             className={`py-2 px-4 rounded-md transition-all  duration-300 relative ${activeSection === link.path
//                                 ? "text-[#ef4949] p-[20px]  "
//                                 : "hover:text-[#ef4949] "
//                                 }`}
//                             onClick={() => handleNavClick(link.path)}
//                         >
//                             <b>  {link.title}</b>
//                             <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform ${activeSection === link.path ? "scale-x-100" : "scale-x-0"
//                                 } transition-transform duration-300`}></span>
//                         </Link>
//                     ))}
//                 </nav>
//             </div>

//             <AnimatePresence>
//                 {isOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 bg-[#11111195] bg-opacity-50 z-40"
//                             onClick={() => setIsOpen(false)}
//                         />
//                         <motion.div
//                             className="fixed top-0 right-0 h-full w-4/5 bg-[#111111] shadow-lg z-50"
//                             variants={drawerVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                         >
//                             <div className="p-6">
//                                 <div className="flex justify-between items-center mb-8">
//                                     <Link to="/" className="text-xl font-bold">
//                                         <img src={logo} alt="Logo" className="h-10" />
//                                     </Link>
//                                     <button
//                                         className="text-[#EEEEEE] text-2xl"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         <FiX size={30} />
//                                     </button>
//                                 </div>
//                                 <nav className="flex flex-col space-y-4">
//                                     {navLinks.map((link) => (
//                                         <motion.div key={link.id} variants={itemVariants}>
//                                             <Link
//                                                 to={link.path}
//                                                 className={`py-2 text-[#EEEEEE] hover:text-[#ef4949] transition-colors ${activeSection === link.path ? "text-[#ef4949]" : ""
//                                                     }`}
//                                                 onClick={() => handleNavClick(link.path)}
//                                             >
//                                                 {link.title} 
//                                                 <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform ${activeSection === link.path ? "scale-x-100" : "scale-x-0"
//                                                     } transition-transform duration-300`}> hello</span>
//                                             </Link>

//                                         </motion.div>
//                                     ))}
//                                 </nav>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };

// export default Header;







// import { FiMenu, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { navLinks } from "../data/data";
// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/logo/cube-events-logo.png";

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [activeSection, setActiveSection] = useState(location.pathname);

//     useEffect(() => {
//         setActiveSection(location.pathname);
//     }, [location]);

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = document.querySelectorAll('section');
//             let current = '';
//             sections.forEach(section => {
//                 const sectionTop = section.offsetTop;
//                 const sectionHeight = section.clientHeight;
//                 if (window.scrollY >= sectionTop - sectionHeight / 3) {
//                     current = section.id;
//                 }
//             });
//             if (current && `/${current}` !== location.pathname) {
//                 navigate(`/${current}`, { replace: true });
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [navigate, location]);

//     const drawerVariants = {
//         closed: { x: "100%", transition: { type: "spring", damping: 20 } },
//         open: { x: 0, transition: { type: "spring", damping: 20 } }
//     };

//     const itemVariants = {
//         closed: { x: 20, opacity: 0 },
//         open: { x: 0, opacity: 1 }
//     };

//     const handleNavClick = (path) => {
//         setActiveSection(path);
//         setIsOpen(false);
//         const section = document.getElementById(path.slice(1));
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const handleWhatsAppRedirect = (url) => {
//         window.open(url, '_blank', 'noopener,noreferrer');
//     };

//     return (
//         <header className="text-white sticky top-0 w-full z-50">
//             <div className="container absolute bg-[#00000058] mx-auto flex justify-between items-center py-4 px-6">
//                 <Link to="/" className="text-xl font-bold">
//                     <img src={logo} alt="Cube Events Logo" className="h-10" />
//                 </Link>

//                 <button
//                     className="md:hidden text-2xl"
//                     onClick={() => setIsOpen(!isOpen)}
//                     aria-label="Toggle navigation menu"
//                 >
//                     {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
//                 </button>

//                 <nav className="hidden md:flex space-x-6">
//                     {navLinks.map((link) => (
//                         link.id === "phone" ? (
//                             <button
//                                 key={link.id}
//                                 onClick={() => handleWhatsAppRedirect(link.url)}
//                                 className="py-2 px-4 rounded-md transition-all duration-300 relative hover:text-[#ef4949] cursor-pointer"
//                             >
//                                 <b>{link.title}</b>
//                             </button>
//                         ) : (
//                             <Link
//                                 key={link.id}
//                                 to={link.path}
//                                 className={`py-2 px-4 rounded-md transition-all duration-300 relative ${
//                                     activeSection === link.path
//                                         ? "text-[#ef4949] p-[20px]"
//                                         : "hover:text-[#ef4949]"
//                                 }`}
//                                 onClick={() => handleNavClick(link.path)}
//                             >
//                                 <b>{link.title}</b>
//                                 <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform ${
//                                     activeSection === link.path ? "scale-x-100" : "scale-x-0"
//                                 } transition-transform duration-300`}></span>
//                             </Link>
//                         )
//                     ))}
//                 </nav>
//             </div>

//             <AnimatePresence>
//                 {isOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 bg-[#11111195] bg-opacity-50 z-40"
//                             onClick={() => setIsOpen(false)}
//                         />
//                         <motion.div
//                             className="fixed top-0 right-0 h-full w-4/5 bg-[#111111] shadow-lg z-50"
//                             variants={drawerVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                         >
//                             <div className="p-6">
//                                 <div className="flex justify-between items-center mb-8">
//                                     <Link to="/" className="text-xl font-bold">
//                                         <img src={logo} alt="Cube Events Logo" className="h-10" />
//                                     </Link>
//                                     <button
//                                         className="text-[#EEEEEE] text-2xl"
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         <FiX size={30} />
//                                     </button>
//                                 </div>
//                                 <nav className="flex flex-col space-y-4">
//                                     {navLinks.map((link) => (
//                                         <motion.div key={link.id} variants={itemVariants}>
//                                             {link.id === "phone" ? (
//                                                 <button
//                                                     onClick={() => handleWhatsAppRedirect(link.url)}
//                                                     className="py-2 text-[#EEEEEE] hover:text-[#ef4949] transition-colors w-full text-left"
//                                                 >
//                                                     {link.title}
//                                                 </button>
//                                             ) : (
//                                                 <Link
//                                                     to={link.path}
//                                                     className={`py-2 text-[#EEEEEE] hover:text-[#ef4949] transition-colors ${
//                                                         activeSection === link.path ? "text-[#ef4949]" : ""
//                                                     }`}
//                                                     onClick={() => handleNavClick(link.path)}
//                                                 >
//                                                     {link.title}
//                                                     <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform ${
//                                                         activeSection === link.path ? "scale-x-100" : "scale-x-0"
//                                                     } transition-transform duration-300`}></span>
//                                                 </Link>
//                                             )}
//                                         </motion.div>
//                                     ))}
//                                 </nav>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };

// export default Header;







// components/Header.jsx
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/data";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo/cube-events-logo.png";
import Aos from "aos";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(location.pathname);

    useEffect(() => {
        setActiveSection(location.pathname);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.id;
                }
            });
            if (current && `/${current}` !== location.pathname) {
                navigate(`/${current}`, { replace: true });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigate, location]);

    const drawerVariants = {
        closed: { x: "100%", transition: { type: "spring", damping: 20 } },
        open: { x: 0, transition: { type: "spring", damping: 20 } }
    };

    const itemVariants = {
        closed: { x: 20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    const handleNavClick = (path) => {
        if (path === 'whatsapp') {
            window.open(
                'https://wa.me/9080787009?text=Hi%20Cube%20Events,%20I%20want%20to%20discuss%20about%20an%20event',
                '_blank',
                'noopener,noreferrer'
            );
            return;
        }

        setActiveSection(path);
        setIsOpen(false);
        const section = document.getElementById(path.slice(1));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // <header className="text-white sticky top-0 w-full z-50">
        //     <div className="container absolute bg-[#00000058] mx-auto flex justify-between items-center py-4 px-6">
        <header className="text-white sticky top-0 w-full bg-[#000000cf]   mx-auto flex  rounded-b-2xl   justify-center mt-0 z-50"
            // data-aos="zoom-out-down"
            data-aos="flip-up"
        >
            <div className="container absolute  mx-auto flex bg-[#000000cf] rounded-b-xl  justify-between items-center py-4 px-6"

            >

                <Link to="/" className="text-xl font-bold">
                    <img src={logo} alt="Cube Events Logo" className="lg:h-20 h-25 " />
                </Link>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>

                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className={`py-2 px-4 rounded-md  transition-all duration-300 relative ${activeSection === link.path
                                ? "text-[#ef4949] p-[20px]"
                                : "hover:text-[#ef4949]"
                                }`}
                            onClick={() => handleNavClick(link.path)}
                        >
                            {link.title}
                            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform ${activeSection === link.path ? "scale-x-100" : "scale-x-0"
                                } transition-transform duration-300`}></span>
                        </Link>
                    ))}
                    {/* <button
                        onClick={() => handleNavClick('whatsapp')}
                        className="py-2 px-4 rounded-md transition-all duration-300 relative hover:text-[#ef4949] cursor-pointer"
                    >
                        <b>+91 90807 87009</b>
                    </button> */}
                    <Stack direction="row" spacing={2}>
                        <Button
                            onClick={() => handleNavClick('whatsapp')}
                            variant="contained"
                            sx={{
                                backgroundColor: '#1DA851',
                                '&:hover': {
                                    backgroundColor: '#1DA8',
                                },
                                '& .MuiButton-startIcon': {
                                    marginRight: '8px',
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '2rem', // or try '2.2rem', '32px', etc.
                                },
                            }}
                            startIcon={<WhatsAppIcon />}
                        >
                            <span className="font-semibold" >
                                Strike Up a Chat
                            </span>
                        </Button>
                    </Stack>
                </nav>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            // initial={{ opacity: 0 }}
                            // animate={{ opacity: 1 }}
                            // exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[#11111195] bg-opacity-50 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 right-0 h-full w-4/5 bg-[#111111] shadow-lg z-50"
                            variants={drawerVariants}
                            // initial="closed"
                            // animate="open"
                            // exit="closed"
                        >
                            <div className="p-6 pb-100 bg-[#000000]">
                                <div className="flex justify-between items-center mb-8">
                                    <Link to="/" className="text-xl font-bold">
                                        <img src={logo} alt="Cube Events Logo" className="lg:h-20 h-25" />
                                    </Link>
                                    <button
                                        className="text-[#EEEEEE] text-2xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <FiX size={30} />
                                    </button>
                                </div>
                                <nav className="flex flex-col space-y-4">
                                    {navLinks.map((link) => (
                                        <motion.div key={link.id} variants={itemVariants}

                                        >
                                            <Link
                                                to={link.path}
                                                className={`py-2 text-[#EEEEEE] hover:text-[#ef4949] transition-colors ${activeSection === link.path ? "text-[#ef4949] border-b-2  border-[#ef4949]" : ""
                                                    }`}
                                                onClick={() => handleNavClick(link.path)}
                                            >
                                                {link.title}
                                                {/* <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#ef4949] transform ${activeSection === link.path ? "scale-x-100" : "scale-x-0"
                                                    } transition-transform duration-300`}></span> */}

                                            </Link>

                                        </motion.div>
                                    ))}
                                    <motion.div variants={itemVariants}>
                                        {/* <button
                                            onClick={() => handleNavClick('whatsapp')}
                                            className="py-2 text-[#EEEEEE] hover:text-[#ef4949] transition-colors w-full text-left"
                                        >
                                            +91 90807 87009
                                        </button> */}
                                        <Stack direction="row" spacing={2}>
                                            <Button
                                                onClick={() => handleNavClick('whatsapp')}
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#1DA851',
                                                    '&:hover': {
                                                        backgroundColor: '#1DA8',
                                                    },
                                                    '& .MuiButton-startIcon': {
                                                        marginRight: '8px',
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: '2rem', // or try '2.2rem', '32px', etc.
                                                    },
                                                }}
                                                startIcon={<WhatsAppIcon />}
                                            >
                                                <span className="font-semibold" >
                                                    Strike Up a Chat
                                                </span>
                                            </Button>
                                        </Stack>
                                    </motion.div>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;