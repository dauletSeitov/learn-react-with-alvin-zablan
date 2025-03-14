const FurnitureItem = ({ furniture }) => {

    console.log("furniture:", furniture)
    return (
        <div className="border border-red-300 flex rounded-lg shadow-lg m-6 overflow-clip">

            <img src={furniture.imageURL} className="w-64 h-44"></img>
            <div className="flex flex-col justify-between w-full">
                <div className="text-2xl mt-4 ml-8">{furniture.name}</div>
                <div className="ml-8">{furniture.description}</div>
                <div className="flex justify-end">
                    <button className="mb-4 bg-rose-400 p-2 rounded-lg text-white text-xl mr-2">add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default FurnitureItem