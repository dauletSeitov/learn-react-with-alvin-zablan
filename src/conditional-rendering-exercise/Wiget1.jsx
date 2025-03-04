import { useState } from "react"

const Wiget1 = () => {

    const [showIcon, setShowIcon] = useState(false);
    return (
        <div className="bg-green-100 p-4 rounded-lg m-4 border border-green-300 flex flex-col items-center">
            {showIcon && <i className="fa-solid fa-face-smile text-teal-500 text-3xl mb-4"></i>}
            <button 
            onClick = {()=>setShowIcon((prev)=>!prev)}
            className="px-4 py-2 bg-teal-500 text-white rounded-full">
                click me
            </button>
        </div>
    )
}


export default Wiget1