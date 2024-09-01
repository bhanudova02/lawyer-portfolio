import { RiCloseCircleFill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";

export function NavBarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleToggleMenu = (flag) => {
        setIsOpen(flag);
    };

    const isActive = (path) => {
        return location.pathname === path ?
            'relative after:absolute after:w-[12%] after:h-[2px] after:bg-lime-300 after:left-0 after:bottom-[-4px]' : '';
    };

    return (
        <div>
            <button onClick={() => handleToggleMenu(true)}>
                <CgMenuRight className="text-3xl md:text-2xl text-gray-500" />
            </button>
            <div
                className={`fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => handleToggleMenu(false)}
            >
                <div
                    className={`fixed top-0 left-0 h-full w-[70%] md:w-[50%]  z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="absolute left-3 top-6">
                        <Link to="/" className="flex items-center">
                            <img src="/white_logo.png" alt="Logo" className="w-48 md:w-52 h-auto" />

                        </Link>
                    </div>

                    <button onClick={() => handleToggleMenu(false)} className="absolute right-4 top-6">
                        <RiCloseCircleFill className="text-3xl text-white/80" />
                    </button>
                    {/* <div className="flex flex-col justify-between items-center h-full p-6">
                       
                        <ul className="font-medium space-y-8  text-center mt-20">
                            <li onClick={() => handleToggleMenu(false)} className={`hover:text-yellow-300 ${isActive('/')}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li onClick={() => handleToggleMenu(false)} className={`hover:text-yellow-300 ${isActive('/submit_film')}`}>
                                <Link to="/submit_film">About</Link>
                            </li>
                            <li onClick={() => handleToggleMenu(false)} className={`hover:text-yellow-300 ${isActive('/awards')}`}>
                                <Link to="/awards">Services</Link>
                            </li>
                            <li onClick={() => handleToggleMenu(false)} className={`hover:text-yellow-300 ${isActive('/gallery')}`}>
                                <Link to="/gallery">FeedBack</Link>
                            </li>
                            <li onClick={() => handleToggleMenu(false)} className={`hover:text-yellow-300 ${isActive('/about')}`}>
                                <Link to="/about">Contact US</Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
