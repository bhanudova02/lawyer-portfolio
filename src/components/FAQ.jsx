import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

// Initialize AOS
AOS.init({ once: true });

export function FAQ() {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto">
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p 
                        data-aos="fade-up" 
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
                    >
                        Find answers to some of the most common legal inquiries below.
                    </p>
                </div>
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="max-w-4xl mx-auto mt-8 space-y-4 md:mt-10"
                >
                    <Accordion type="single" collapsible className="space-y-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger
                                data-aos="fade-right"
                                data-aos-delay="500"
                                className="text-sm md:text-xl text-start"
                            >
                                What services do you offer?
                            </AccordionTrigger>
                            <AccordionContent>
                                We specialize in various legal services including corporate law, family law, criminal defense, and real estate law.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger
                                data-aos="fade-right"
                                data-aos-delay="600"
                                className="text-sm md:text-xl text-start"
                            >
                                How do you charge for your services?
                            </AccordionTrigger>
                            <AccordionContent>
                                Our fees are structured based on the complexity of the case. We offer both hourly rates and flat fees, depending on the service.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger
                                data-aos="fade-right"
                                data-aos-delay="700"
                                className="text-sm md:text-xl text-start"
                            >
                                Can you represent me in court?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, our experienced attorneys are fully equipped to represent clients in both civil and criminal court proceedings.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger
                                data-aos="fade-right"
                                data-aos-delay="800"
                                className="text-sm md:text-xl text-start"
                            >
                                Do you offer free consultations?
                            </AccordionTrigger>
                            <AccordionContent>
                                We offer a free initial consultation to discuss your legal needs and determine how we can best assist you.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger
                                data-aos="fade-right"
                                data-aos-delay="900"
                                className="text-sm md:text-xl text-start"
                            >
                                What areas do you serve?
                            </AccordionTrigger>
                            <AccordionContent>
                                We serve clients across the region, with a focus on [Your Location/City]. We are also available for remote consultations.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <p 
                    data-aos="fade-up" 
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    className="text-center text-gray-600 text-base mt-9"
                >
                    Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a>
                </p>
            </div>
        </section>
    );
}
