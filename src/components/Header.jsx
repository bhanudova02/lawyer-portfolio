import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full px-6 py-3 transition-all duration-500 ${isScrolled ? 'bg-white text-black animate-slide-down shadow shadow-green-500/20' : 'bg-gray-200/5 text-white'}`}
        >
            <div className='flex justify-between'>
                <div>
                    <img src="/logo.png" alt="Logo" className="w-52 h-auto" />
                </div>
                <ul className="hidden md:flex items-center gap-8 font-semibold">
                    <li>About</li>
                    <li>Services</li>
                    <li>Feedback</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </header>
    );
}
