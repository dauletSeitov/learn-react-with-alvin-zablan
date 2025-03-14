import { useState } from "react"
import FurnitureItem from "./FurnitureItem"
import furnitures from "./furnitures"
import clsx from "clsx"

const PAGE_SIZE = 5
const FurniturePagination = () => {

    const [index, setIndex] = useState(1)
    const furnitureItems = furnitures.slice(index*PAGE_SIZE, PAGE_SIZE * (index + 1)).map((f, i) => <FurnitureItem furniture={f} key={i} />)

    const pageNumer =  Math.ceil(furnitures.length / PAGE_SIZE)
    const buttons =[]
    for(let i = 0; i< pageNumer; i++){
        buttons.push(<button onClick={()=>setIndex(i)} 
        className ={clsx("w-4 mx-1 px-1 rounded-md", index == i? "bg-rose-200 text-rose-500" : "bg-stone-400")} key ={i}>{i}</button>)
    }
    return (
        <div className="flex flex-col items-center py-64 bg-stone-100">
            
            <div className="mx-4 mb-10 text-4xl text-stone-600">Bagdaulet Seilovs Furniture</div>
            <div className="w-full max-w-2xl flex flex-col ">
                <div className="flex justify-end px-8 py-2 border-b border-stone-700">{buttons}</div>
                {furnitureItems}
            </div>

        </div>
    )
}

export default FurniturePagination