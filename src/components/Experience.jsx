import React from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

AOS.init({ once: true }); // Initialize AOS

export default function Experience() {
    return (
        <div className="py-20" id="about">
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto space-y-10">
                <div className="flex flex-col lg:flex-row">
                    <div data-aos="fade-up" data-aos-delay="200" className="w-full lg:w-[40%] relative">
                        <img src="about.jpg" alt="AboutUs" className="rounded-md h-full w-full object-cover" />
                    </div>
                    <div className="w-full lg:w-[60%] relative">
                        <div data-aos="fade-up" data-aos-delay="200" className="bg-white w-fit p-4 rounded-xl ms-0 lg:-ms-40 mt-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-teal-800">16 Years Experience</h2>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className="px-2 lg:px-6 mt-0 lg:mt-8">
                            <div>
                                <h6 data-aos="fade-up" data-aos-delay="600" className="font-semibold text-2xl">Learn About Us</h6>
                                <h2 data-aos="fade-up" data-aos-delay="800" className="text-3xl md:text-5xl font-bold mt-1">We Provide Reliable And Effective Legal Services</h2>
                                <p data-aos="fade-up" data-aos-delay="1000" className="text-lg mt-4">
                                    With 16 years of experience, John Doe provides the foundation you can trust. Specializing in delivering reliable and effective legal services, John Doe that your rights are defended with precision and care. His team is committed to offering personalized legal solutions, guiding you through every step of the legal process with integrity and dedication. When you choose John Doe, you're not just getting a lawyer; you're gaining a trusted advocate for your cause.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
