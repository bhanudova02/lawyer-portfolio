import { Button } from "@/components/ui/button"

export function Services() {
    return (
        <div className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-500 py-20">
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto">

                <div className="mb-10 space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-white">Our Legal Services</h1>
                    <p className="text-lg font-medium text-gray-200 text-center leading-relaxed">
                        Our legal team offers personalized consultation, expert litigation, meticulous contract drafting, and thorough legal research. We ensure that your legal needs are met with clarity, precision, and unwavering dedication, empowering you to make informed decisions and safeguard your interests.
                    </p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-center mt-10 text-white">Get in Touch</h2>
                <p className="text-center text-gray-200 mb-12">
                    If you need legal assistance, please fill out the form below, and we'll get back to you promptly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="block w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="block w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter Organization"
                            className="block w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter Your Mobile"
                            className="block w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Enter Type Of Legal Service"
                        className="block w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                </div>

                <div className="relative mb-6">
                    <select className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent">
                        <option>Select a Service</option>
                        <option>Consultation</option>
                        <option>Litigation</option>
                        <option>Contract Drafting</option>
                        <option>Legal Research</option>
                    </select>
                </div>

                <div className="relative mb-6">
                    <textarea
                        rows="6"
                        placeholder="Describe Your Legal Issue"
                        className="block w-full px-4 py-3 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                </div>

                <div className="relative mb-6">
                    <input
                        type="file"
                        className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                </div>

                <div className="text-center w-full">
                    <Button className="bg-white w-full text-black text-lg py-6 px-6 rounded-lg hover:bg-green-300 uppercase border-2 border-teal-600 transition duration-300">
                        Submit
                    </Button>
                </div>

            </div>
        </div>
    );
}
