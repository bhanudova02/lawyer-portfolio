import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { carousel_data } from "@/lib/data"
export function Slider() {
    return (
        <Carousel>
            <CarouselContent>
                {carousel_data.map((data, index) =>
                    <CarouselItem key={index}>
                        <div className="relative">
                            <img src={data.image} width={1000} height={400} alt="Banners" className="w-full h-[400px] md:h-[50vh] lg:h-screen object-cover" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="w-[19.5rem] md:w-[35rem] lg:w-[50rem] ">
                                    <h3 className="text-white font-bold text-lg md:text-2xl">{data.title}</h3>
                                    <p className="text-white text-3xl md:text-5xl font-bold mt-2">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}