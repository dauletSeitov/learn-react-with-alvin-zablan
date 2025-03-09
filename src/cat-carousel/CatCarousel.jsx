import { useState } from "react";
import CatCard from "./CatCard"
import NavButton from "./NavButton";
import CATS from "./cats"
const CatCarousel = () => {

    const [catIndex, setCatIndex] = useState(0)

    console.log("CATS:", CATS[1])
    return (


        <div className="flex justify-center items-center">
            <NavButton icon="fa-angle-left"
                show={catIndex > 0}
                onClick={() => setCatIndex((prev) => prev - 1)} />
            <CatCard cat={CATS[catIndex]} />
            <NavButton icon="fa-angle-right"
                show={catIndex < CATS.length - 1}
                onClick={() => setCatIndex((prev) => prev + 1)} />
        </div>

    )


}



export default CatCarousel