import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
AOS.init({ once: true });
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoClose } from 'react-icons/io5';

export function ContactUs() {
    const [showModal, setShowModal] = useState(false); // State for showing the popup
    const [isLoading, setIsLoading] = useState(false); // Optional loading state

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs
            .sendForm('service_3ru5c5h', 'template_ucllh7r', form.current, {
                publicKey: 'oR5wWw8rYBM6xTxNu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setIsLoading(false);
                    setShowModal(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="w-[100%] md:w-[80%] lg:max-w-6xl mx-auto space-y-10">
                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                        <div className='flex items-center gap-2'>
                            <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin border-blue-500"></div>
                            <h2 className='font-bold text-white'>Loading..</h2>
                        </div>
                    </div>
                )}

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white px-4 text-center py-6 rounded-lg shadow-md relative w-[80%] md:w-[40%] lg:w-[25%]">
                            <h2 className="text-base font-bold ">Message Sent Successfully </h2>
                            <p className='text-sm '>
                                Thanks for reaching out! I'll get back to you within the next 24 hours. <span className='text-green-600 font-bold text-xl'>&#10003;</span>
                            </p>
                            <button
                                className="bg-rose-500 absolute top-3 right-3 text-white hover:cursor-pointer hover:bg-lime-400 font-bold  rounded-full inline-flex items-center text-sm "
                                onClick={() => setShowModal(false)}
                            >
                                <IoClose className="text-lg" />
                            </button>
                        </div>
                    </div>
                )}
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Contact Us
                        </h2>
                        <p className="max-w-2l mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            If you have any questions or need legal assistance, please fill out the form below. Our team will get back to you as soon as possible to provide the support you need.
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="max-w-5xl mx-auto mt-12 sm:mt-16"
                    >
                        <div className="bg-white shadow-md rounded-xl overflow-hidden">
                            <div className="px-6 py-12 sm:p-12">
                                <h3
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="text-3xl font-semibold text-center text-gray-900"
                                >
                                    Get in Touch
                                </h3>

                                <form ref={form} onSubmit={sendEmail} className="mt-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                        <div
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <label htmlFor="name" className="text-base font-medium text-gray-900">Full Name</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    required
                                                    type="text"
                                                    name="FullName"
                                                    placeholder="Enter your full name"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            data-aos-duration="1000"
                                        >
                                            <label htmlFor="email" className="text-base font-medium text-gray-900">Email Address</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    required
                                                    type="email"
                                                    name="EmailAddress"
                                                    placeholder="Enter your email address"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                            data-aos-duration="1000"
                                        >
                                            <label htmlFor="phone" className="text-base font-medium text-gray-900">Phone Number</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    required
                                                    type="tel"
                                                    name="PhoneNumber"
                                                    placeholder="Enter your phone number"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                            data-aos-duration="600"
                                        >
                                            <label htmlFor="company" className="text-base font-medium text-gray-900">Company Name (if applicable)</label>
                                            <div className="mt-2.5 relative">
                                                <input

                                                    type="text"
                                                    name="CompanyName"
                                                    placeholder="Enter your company name"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="message" className="text-base font-medium text-gray-900">Message</label>
                                            <div className="mt-2.5 relative">
                                                <textarea
                                                    required
                                                    name="Message"
                                                    placeholder="Enter your message or question"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit" value="Send"
                                                data-aos="fade-up"
                                                data-aos-delay="400"
                                                data-aos-duration="400"
                                                className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
