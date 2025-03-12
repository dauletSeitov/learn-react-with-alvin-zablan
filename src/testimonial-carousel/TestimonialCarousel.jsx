import testimonials from "./testimonials"
import TestimonialCard from "./TestimonialCard"
import { useState } from "react"
const TestimonialCarousel = () => {

    const [index, setIndex] = useState(1)

    const testimonialCards = testimonials.slice(index, index + 3).map((t, i) => <TestimonialCard key={i} testimonial={t} />)
    return (
        <div className="flex items-center">
            <button onClick={() => {
                if (index > 0) {
                    setIndex((prev) => prev - 1)
                }

            }}><i className="fa-solid fa-arrow-left text-2xl text-orange-500"></i></button>
            <div className="flex flex-wrap justify-center m-4">
                {testimonialCards}
            </div>
            <button onClick={() => {
                if (index < testimonials.length - 3) {
                    setIndex((prev) => prev + 1)
                }
            }
            }><i className="fa-solid fa-arrow-right text-2xl text-orange-500"></i></button>
        </div>
    )
}

export default TestimonialCarousel