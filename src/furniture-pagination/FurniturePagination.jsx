import FurnitureItem from "./FurnitureItem"
import furnitures from "./furnitures"
const FurniturePagination = () => {

    // const furnitureItems = furnitures.map ((f, i)=> <FurnitureItem furniture={f} key={i}/>)
    return (
        <div className="flex flex-col items-center py-64 bg-stone-100">
            <div className="mx-4 mb-10 text-4xl text-stone-600">Bagdaulet Seilovs Furniture</div>
            <div className="w-full max-w-2xl">
                <FurnitureItem furniture={furnitures[0]} />
            </div>

        </div>
    )
}

export default FurniturePagination