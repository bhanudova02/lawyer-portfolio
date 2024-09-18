import { FaBalanceScale, FaGavel, FaFileContract, FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true });
const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-duration="1000">
        <Icon className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);
export function Services() {
    const services = [
        {
            icon: FaBalanceScale,
            title: 'Legal Consultation',
            description: 'Expert advice tailored to your specific legal needs.'
        },
        {
            icon: FaGavel,
            title: 'Litigation',
            description: 'Skilled representation in court for various legal matters.'
        },
        {
            icon: FaFileContract,
            title: 'Contract Drafting',
            description: 'Precise and comprehensive contract creation and review.'
        },
        {
            icon: FaSearch,
            title: 'Legal Research',
            description: 'In-depth research to support your case with relevant laws and precedents.'
        }
    ];

    return (
        <div className="bg-slate-200  text-black py-20">
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto">
                <div className="mb-16 space-y-4" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-4xl font-bold text-center text-blue-600">Our Legal Services</h1>
                    <p className="text-lg font-medium text-center leading-relaxed max-w-3xl mx-auto">
                        Our expert legal team offers personalized solutions to empower your decisions and protect your interests.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 shadow-lg" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-3xl font-bold text-center mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-center mb-6">
                        Contact us today for a free initial consultation and take the first step towards resolving your legal matters.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
