const TestimonialCard = ({ testimonial }) => {

    return (
        <div className="flex flex-col w-72 m-2">
            <div className="flex flex-col items-center rounded-t-lg py-4 bg-gradient-to-r from-cyan-500 to-blue-500">
                <img src={testimonial.portrait} className="w-24 rounded-lg" />
                <div className="text-xl text-white">
                    {testimonial.name}
                </div>
            </div>
            <div className="flex flex-col items-center border border-neutral-300 px-4 py-6 rounded-b-lg">
                <div className="text-amber-400 mb-4">
                    {testimonial.rating}
                    <i className="fa-regular fa-star ml-1"></i>
                </div>
                <div className="text-neutral-600 leading-relaxed">{testimonial.text}</div>
            </div>
        </div>
    )
}


export default TestimonialCard