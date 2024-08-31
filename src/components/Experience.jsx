export default function Experience() {
    return (
        <div className="py-24">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[40%]">
                    <img src="about.jpg" alt="AboutUs" className="rounded-md" />
                </div>
                <div className="w-full lg:w-[60%] relative">
                    <div className="bg-white w-fit p-4 rounded-xl ms-0 lg:-ms-40 mt-4 " >
                        <h2 className="text-4xl font-bold text-teal-800">16 Years Experience</h2>
                    </div>
                    <div className="lg:absolute bottom-0 px-2 lg:px-6">
                        <h6 className="font-semibold text-2xl">Learn About Us</h6>
                        <h2 className="text-5xl font-bold mt-1">We Provide Reliable And Effective Legal Services</h2>
                        <p className="text-lg mt-4">

                            With 16 years of experience, we deliver reliable legal services with precision and care. Our team offers personalized solutions and guides you through every step with integrity. Choose us and gain a trusted advocate for your cause.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
