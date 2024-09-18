import { useState, useEffect } from 'react';
import { NavBarComponent } from './NavBarComponent';
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [logo, setLogo] = useState("/white_logo.png")
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
                setLogo("logo.png")
            } else {
                setIsScrolled(false);
                setLogo("white_logo.png")
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const location = useLocation();
    const [cookies, setCookie, removeCookie] = useCookies();
    function isActive(path) {
        return location.pathname === path ? 'relative after:absolute after:w-[60%] after:h-[2px] after:bg-green-400 after:left-0 after:bottom-[-3px]' : '';
    }



    return (
        <header
            className={`fixed top-0 z-50 w-full px-6 py-3 transition-all duration-500 ${isScrolled ? 'bg-white text-black animate-slide-down shadow shadow-green-500/20' : 'bg-gray-200/5 text-white'}`}
        >
            <div className='flex justify-between'>
                <div data-aos="zoom-in" data-aos-delay="500" data-aos-anchor-placement="top-center" >
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-48 md:w-52 h-auto" />
                    </Link>
                </div>
                <ul data-aos="zoom-in" data-aos-delay="800" className="hidden md:flex items-center gap-8 font-semibold">
                    <li>About</li>
                    <li>Services</li>
                    <li>Feedback</li>
                    <li>Contact Us</li>
                </ul>
                <div className='md:hidden block'>
                    <NavBarComponent />
                </div>
            </div>
        </header>
    );
}
