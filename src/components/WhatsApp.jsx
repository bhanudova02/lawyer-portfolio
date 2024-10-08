import { FaWhatsapp } from 'react-icons/fa';

export function WhatsApp() {
    const phoneNumber = '+916302715653'; // Replace with your WhatsApp phone number in international format
    const message = 'Hello, I would like to chat with you!'; // Optional initial message

    return (
        <a
            href={`/`}
            
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg flex items-center space-x-2 cursor-pointer z-50 hover:bg-green-600 transition-colors duration-300"
        >
            <FaWhatsapp className="text-white text-2xl" />
            <span className="text-white font-semibold text-sm sm:inline">Chat with us</span>
        </a>
    );
}
