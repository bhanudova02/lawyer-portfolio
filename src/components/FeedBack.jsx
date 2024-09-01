import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

// Initialize AOS
AOS.init({ once: true });

export function FeedBack() {
    return (
        <section className="py-10 bg-[#ECEFF4] sm:py-16 lg:py-24">
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto space-y-10">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                        <div 
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
                                Share Your Feedback
                            </h2>
                            <p 
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                className="text-base text-gray-600"
                            >
                                We value your feedback and are always striving to improve our legal services. Please let us know about your experience with our firm, and how we can better assist you in the future.
                            </p>

                            <form className="space-y-4">
                                <div 
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000"
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your email address"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>

                                <div 
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    data-aos-duration="1000"
                                >
                                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                                        Feedback
                                    </label>
                                    <textarea
                                        id="feedback"
                                        rows="4"
                                        placeholder="Your feedback here"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                    data-aos-duration="1000"
                                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                                >
                                    Submit Feedback
                                </button>
                            </form>
                        </div>

                        <div 
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            className="relative"
                        >
                            <img
                                src="/feedback.jpg"
                                alt="Legal Feedback"
                                className="lg:absolute top-0 left-0 h-[250px] md:h-[400px] lg:h-full w-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
