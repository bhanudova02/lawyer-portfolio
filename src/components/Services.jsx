import { Button } from "@/components/ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import React, { useState } from 'react';
import { FaUpload, FaSpinner } from 'react-icons/fa';

// Initialize AOS
AOS.init({ once: true });

export function Services() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        attachment: null
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email') {
            setErrors({
                ...errors,
                email: validateEmail(value) ? '' : 'Please enter a valid email address'
            });
        }
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, attachment: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all fields
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.message) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        // Simulating form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '', attachment: null });
            setTimeout(() => setIsSuccess(false), 5000);
        }, 2000);
    };

    const commonInputClasses = 'w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400';
    const errorInputClasses = 'border-red-500 focus:ring-red-400';


    return (
        <div className="bg-slate-200  text-black py-20">
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto">

                <div className="mb-10 space-y-3" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">Our Legal Services</h1>
                    <p className="text-lg font-medium text-center leading-relaxed">
                        Our legal team offers personalized consultation, expert litigation, meticulous contract drafting, and thorough legal research. We ensure that your legal needs are met with clarity, precision, and unwavering dedication, empowering you to make informed decisions and safeguard your interests.
                    </p>
                </div>

             
            </div>
        </div >
    );
}
