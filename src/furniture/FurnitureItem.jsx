import { useState } from "react"
import { deleteFurniture, updateFurniture } from "./FurnitureService"
const FurnitureItem = ({ furniture, fetchFurnitures }) => {

    const [editing, setEditing] = useState(false)
    const [currentName, setCurrentName] = useState(furniture.name)
    const [currentDescription, setCurrentDescription] = useState(furniture.description)
    return (
        <div className="flex m-8 rounded-lg shadow-md border-stone-300 overflow-clip">
            <img
                src={furniture.imageURL}
                className="object-cover w-48 h-48 border-r border-stone-300"></img>
            <div className="flex flex-col justify-between w-full px-6 py-4 bg-white">
                {editing ? <>
                    <input
                        className="border border-stone-200 rounded-md shadow-inner p-1 text-blue-600 text-xl"
                        value={currentName}
                        onChange={(e) => setCurrentName(e.target.value)}></input>
                    <textarea className="border border-stone-200 rounded-md shadow-inner p-1 text-blue-600 text-xl"
                        value={currentDescription}
                        onChange={(e) => setCurrentDescription(e.target.value)}></textarea>
                </> : <>
                    <div className="mb-4 text-2xl text-stone-600 ">{furniture.name}</div>
                    <div className="text-stone-500">{furniture.description}</div>
                </>}
                <div className="flex justify-end">
                    {editing ? <button className="px-4 py-2 mx-1 bg-green-500 rounded-md text-red-100 haver:bg-red-600"
                        onClick={async () => {
                            await updateFurniture(furniture.id, { name: currentName, description: currentDescription })
                            fetchFurnitures()
                            setEditing(false)
                        }
                        }>
                        <i className="fas fa-check mr-1"></i>
                        set
                    </button> :
                        <>
                            <button className="px-4 py-2 mx-1 bg-blue-500 rounded-md text-red-100 haver:bg-red-600"
                                onClick={() => {
                                    setEditing(true)
                                }
                                }>
                                <i className="fas fa-pen mr-1"></i>
                                edit
                            </button>
                            <button className="px-4 py-2 mx-1 bg-red-500 rounded-md text-red-100 haver:bg-red-600"
                                onClick={async () => {
                                    await deleteFurniture(furniture.id)
                                    fetchFurnitures()
                                }
                                }>
                                <i className="fas fa-trash mr-1"></i>
                                delete
                            </button>
                        </>
                    }


                </div>


            </div>

        </div>)



}




export default FurnitureItem