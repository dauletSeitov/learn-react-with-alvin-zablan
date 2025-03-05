import { useState } from "react"

const IMAGES = [
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg",
    "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg",
    "https://static1.squarespace.com/static/607f89e638219e13eee71b1e/60a5de2d343ab05906685029/646c549369f8011c28cd5843/1684821591871/michael-sum-LEpfefQf4rU-unsplash.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheOc_goE5FYva5EJwIFDbqmoZT4z-2VYUSA&s"
]
const ImageCarousel = () => {

    const [index, setindex] = useState(0)

    return (
        <div >
            <div className="flex flex-col text-center text-cyan-400 text-2xl">dog</div>
            <div className="flex justify-center items-center">
                <button className="bg-orange-400 rounded-full w-10 p-2 text-orange-100"
                    onClick={() => setindex((prev) => (prev + 1) % IMAGES.length)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <img className="m-8 rounded-lg w-[200px] h-[300px] object-cover" src={IMAGES[index]}  ></img>

                <button className="bg-orange-400 rounded-full w-10 p-2 text-orange-100"
                    onClick={() => setindex((prev) => (prev + 1) % IMAGES.length)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default ImageCarousel