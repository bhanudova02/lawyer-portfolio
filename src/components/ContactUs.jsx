export function ContactUs() {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="w-[100%] md:w-[80%] lg:max-w-6xl mx-auto space-y-10">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact Us</h2>
                        <p className="max-w-2l mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            If you have any questions or need legal assistance, please fill out the form below. Our team will get back to you as soon as possible to provide the support you need.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                        <div className="bg-white shadow-md rounded-xl overflow-hidden">
                            <div className="px-6 py-12 sm:p-12">
                                <h3 className="text-3xl font-semibold text-center text-gray-900">Get in Touch</h3>

                                <form action="#" method="POST" className="mt-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                        <div>
                                            <label htmlFor="name" className="text-base font-medium text-gray-900">Full Name</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    placeholder="Enter your full name"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900">Email Address</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    placeholder="Enter your email address"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="text-base font-medium text-gray-900">Phone Number</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    placeholder="Enter your phone number"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="text-base font-medium text-gray-900">Company Name (if applicable)</label>
                                            <div className="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    id="company"
                                                    placeholder="Enter your company name"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="message" className="text-base font-medium text-gray-900">Message</label>
                                            <div className="mt-2.5 relative">
                                                <textarea
                                                    id="message"
                                                    placeholder="Enter your message or question"
                                                    className="block w-full px-4 py-3 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
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
