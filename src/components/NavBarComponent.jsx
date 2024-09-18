import { RiCloseCircleFill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function NavBarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Disable scrolling when the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    const handleToggleMenu = (flag) => {
        setIsOpen(flag);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'relative after:absolute after:w-[12%] after:h-[2px] after:bg-lime-300 after:left-0 after:bottom-[-4px]' : '';
    };

    return (
        <div>
            {/* Mobile Menu Button */}
            <button onClick={() => handleToggleMenu(true)}>
                <CgMenuRight className="text-3xl md:text-2xl text-gray-500" />
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => handleToggleMenu(false)}
            >
                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 left-0 h-full w-[70%] md:w-[50%] z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Logo */}
                    <div className="absolute left-3 top-6">
                        <Link to="/" className="flex items-center">
                            <img src="/white_logo.png" alt="Logo" className="w-48 md:w-52 h-auto" />
                        </Link>
                    </div>

                    {/* Close Button */}
                    <button onClick={() => handleToggleMenu(false)} className="absolute right-4 top-6">
                        <RiCloseCircleFill className="text-3xl text-white/80" />
                    </button>

                    {/* Mobile Navigation List */}
                    <div className="flex flex-col p-6">
                        <ul className="font-medium space-y-8 text-start mt-24">
                            <li onClick={() => handleToggleMenu(false)} className={`text-xl bg-gray-800/30 rounded-md p-2 hover:text-yellow-300 ${isActive('#about')}`}>
                                <a href="#about">About</a>
                            </li>
                            <li onClick={() => handleToggleMenu(false)} className={`text-xl bg-gray-800/30 rounded-md p-2 hover:text-yellow-300 ${isActive('#services')}`}>
                                <a href="#services">Services</a>
                            </li>
                            <li onClick={() => handleToggleMenu(false)} className={`text-xl bg-gray-800/30 rounded-md p-2 hover:text-yellow-300 ${isActive('#feedback')}`}>
                                <a href="#feedback">Feedback</a>
                            </li>
                            <li onClick={() => handleToggleMenu(false)} className={`text-xl bg-gray-800/30 rounded-md p-2 hover:text-yellow-300 ${isActive('#contact-us')}`}>
                                <a href="#contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
