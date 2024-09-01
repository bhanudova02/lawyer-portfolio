import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900"> About </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900"> Service </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900"> FeedBack </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900"> Contact Us </a>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <FaFacebookF className="h-6 w-6" />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="h-6 w-6" />
                    </a>

                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <FaTwitter className="h-6 w-6" />
                    </a>
                </div>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 - All rights reserved.</p>
            </div>
        </footer>
    );
}
    