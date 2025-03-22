import { useEffect } from "react"
import { useState } from "react"
import { getAllFurnitures } from "./FurnitureService"
import FurnitureItem from "./FurnitureItem"

const Furniture = () => {

    const [furnitures, setFurnitures] = useState([])

    const fetchFurnitures = () => {
        getAllFurnitures()
            .then(response => response.json())
            .then(data => setFurnitures(data))
    }


    useEffect(() => {
        fetchFurnitures()
    }, [])

    const furnitureItems = furnitures.map((f, i) => <FurnitureItem furniture={f} fetchFurnitures={fetchFurnitures} key={i} />)

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-2xl">{furnitureItems}</div>
        </div>
    )


}

export default Furniture