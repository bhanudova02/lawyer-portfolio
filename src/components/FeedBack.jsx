import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
AOS.init({ once: true });
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoClose } from 'react-icons/io5';

export function FeedBack() {
    const form = useRef();
    const [showModal, setShowModal] = useState(false); // State for showing the popup
    const [isLoading, setIsLoading] = useState(false); // Optional loading state

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs
            .sendForm('service_duv4p2a', 'template_cm99zyd', form.current, {
                publicKey: 'VmQeCVDyitnq2OwpA',
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

                            <form ref={form} onSubmit={sendEmail} className="space-y-4">
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
                                        required
                                        name="Email_Address"
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
                                        required
                                        name="Feedback_Description"
                                        rows="4"
                                        placeholder="Your feedback here"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit" value="Send"
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                    data-aos-duration="1000"
                                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                                >
                                    Submit Feedback
                                </button>
                            </form>
                        </div>
                        {isLoading && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                                <div className='flex items-center gap-2'>
                                    <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin border-blue-500"></div>
                                    <h2 className='font-bold text-white'>Loading..</h2>
                                </div>
                            </div>
                        )}

                        {showModal && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90">
                                <div className="bg-white px-4 text-center py-6 rounded-lg shadow-md relative w-[80%] md:w-[40%] lg:w-[25%]">
                                    <h2 className="text-lg font-bold ">Your Feedback Sent Successfully </h2>
                                    <p className='text-md '>
                                        Thanks For Sharing Your Feedback<span className='text-green-600 font-bold text-xl'>&#10003;</span>
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
