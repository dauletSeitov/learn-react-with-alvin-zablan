import testimonials from "./testimonials"
import TestimonialCard from "./TestimonialCard"
import TestimonialCarousel from "./TestimonialCarousel"
const TestimonialCarouselWrapper = () => {

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-5xl flex flex-col items-center">
                <div className="text-3xl text-neutral-600 border-b-4 border-orange-400 p-2">
                    Customers Love AL's Autors
                </div>
                <TestimonialCarousel testimonial = {testimonials[2]}/>
            </div>

        </div>
    )
}

export default TestimonialCarouselWrapper