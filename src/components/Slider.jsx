import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { carousel_data } from "@/lib/data";

export function Slider() {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {carousel_data.map((data, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-[400px] md:h-[50vh] lg:h-screen">
                                <img
                                    src={data.image}
                                    width={1000}
                                    height={400}
                                    alt={data.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute  inset-0 bg-black opacity-60" />
                              
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
