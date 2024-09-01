import { FaBriefcase, FaBalanceScale, FaTrophy, FaHandshake } from 'react-icons/fa';

export function WhyChooseUs() {
    return (
        <section className="py-10 bg-[#F9FAFB] sm:py-16 lg:py-24">
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
                    <p className="text-lg text-gray-600">
                        Our commitment to excellence ensures that you receive top-notch legal representation and personalized attention.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <div>
                            <p className="text-xl font-semibold text-gray-900 flex items-center gap-1">Best Law Practices  <FaBriefcase className='w-8 h-8 bg-blue-500 rounded-full text-white  p-2' /></p>
                            <p className="mt-2 text-gray-700">
                                We adhere to the highest standards in legal practice, ensuring that you receive the best legal representation possible.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <div>
                            <p className="text-xl font-semibold text-gray-900 flex items-center gap-1">Efficiency & Trust <FaBalanceScale className='w-8 h-8 bg-green-500 rounded-full text-white  p-2' /></p>
                            <p className="mt-2 text-gray-700">
                                Our team works diligently and efficiently to ensure your case is handled with the utmost care and trust.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <div>
                            <p className="text-xl font-semibold text-gray-900 flex items-center gap-1">Results You Deserve <FaTrophy className='w-8 h-8 bg-yellow-500 rounded-full text-white  p-2' /></p>
                            <p className="mt-2 text-gray-700">
                                We are committed to achieving the best possible results for our clients, ensuring your satisfaction and justice.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <div>
                            <p className="text-xl font-semibold text-gray-900 flex items-center gap-1">Client-Focused Approach <FaHandshake className='w-8 h-8 bg-red-500 rounded-full text-white  p-2' /></p>
                            <p className="mt-2 text-gray-700">
                                We prioritize your needs and concerns, tailoring our services to provide personalized legal solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
