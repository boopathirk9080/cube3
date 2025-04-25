import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../data/vite.svg";
import { navlink } from "../data/data";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#0a192f] text-white shadow-md sticky top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-10">

                <Link to="/" className="text-xl font-bold">
                    <img src={logo} alt="Logo" className="h-10" />
                </Link>

                {/* Desktop Navigation  */}
                <nav className="hidden md:flex space-x-10">
                    {navlink.map((link, i) => (
                        <Link
                            key={i}
                            to={link.url}
                            className="px-4 py-2 rounded-md hover:bg-[#12243f] hover:text-white transition-all duration-300"
                        >
                            {link.text}
                        </Link>
                    ))}
                </nav>


                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-[#112240] absolute top-full left-0 w-full p-6 shadow-md">
                    {navlink.map((link, i) => (
                        <Link
                            key={i}
                            to={link.url}
                            className="block text-white py-2 text-lg text-center hover:text-blue-400 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.text}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
