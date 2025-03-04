import { useState } from "react"

const Wiget2= () => {

    const [changeColor, setChangeColor] = useState(false);
    return (
        <div className="bg-blue-100 p-4 rounded-lg m-4 border border-blue-300 flex flex-col items-center">
            <button 
            onClick = {()=>setChangeColor((prev)=>!prev)}
            className={`px-4 py-2 bg-blue-500 text-white rounded-full ${changeColor ? "bg-orange-500" : "bg-blue-500"}`}>
                click me
            </button>
        </div>
    )
}


export default Wiget2

