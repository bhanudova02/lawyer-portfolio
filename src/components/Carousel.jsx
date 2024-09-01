import React from 'react';
import { FaBriefcase, FaShieldAlt, FaRegHandshake } from 'react-icons/fa';

export function Carousel() {
    return (
        <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#101212] to-[#08201D]">
                {/* Uncomment the image if you need it instead of video */}
                <img src="/home_banner1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <section className="relative flex flex-col justify-center h-full pt-12 pb-8 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 data-aos="fade-right" data-aos-anchor-placement="top-center" className="text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                                    Trusted Legal Expertise for Your Future
                                </span>
                            </h1>
                            <p data-aos="fade-left" data-aos-anchor-placement="top-center" className="mt-4 text-sm text-white sm:text-base md:text-lg lg:text-xl">
                                With decades of experience, we offer expert legal services to protect your rights and secure your interests.
                            </p>
                            <div data-aos="flip-up" data-aos-anchor-placement="top-center"  data-aos-delay="200">
                                <button className="inline-flex items-center px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 bg-green-500 rounded-lg sm:mt-8 sm:px-6 sm:py-4 md:px-8 md:py-5 md:text-base hover:bg-green-600 focus:bg-green-600">
                                    Schedule a Consultation
                                    <svg
                                        className="w-5 h-5 ml-4 -mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div   className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8">
                                <div data-aos="fade-right" data-aos-delay="50" className="flex items-center justify-center text-left">
                                    <FaBriefcase className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />
                                    <p className="ml-2 text-xs text-white sm:text-sm md:text-base">
                                        Experienced in handling complex legal cases
                                    </p>
                                </div>

                                <div data-aos="fade-right"  data-aos-delay="300" className="flex items-center justify-center text-left">
                                    <FaShieldAlt className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />
                                    <p className="ml-2 text-xs text-white sm:text-sm md:text-base">
                                        No hidden fees, transparent services
                                    </p>
                                </div>

                                <div data-aos="fade-right"  data-aos-delay="500" className="flex items-center justify-center text-left">
                                    <FaRegHandshake className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />
                                    <p className="ml-2 text-xs text-white sm:text-sm md:text-base">
                                        Comprehensive legal support from start to finish
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
