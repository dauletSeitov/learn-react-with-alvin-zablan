import { useState } from "react"

const Counter = () => {

    const [value, setValue] = useState(0)
    return (
        <div className="text-4xl flex justify-center border border-red-200 h-screen items-center">
            <button className="text-white text-4xk bg-red-400 w-8 rounded-lg"
                onClick={()=> setValue((prev) => prev - 1)}>-</button>
            <div className="m-4 text-neutral-400 w-20 border border-black text-center">{value}</div>
            <button className="text-white text-4xk bg-emerald-400 w-8 rounded-lg"
                onClick={()=> setValue((prev) => prev + 1)}>+</button>
        </div>
    )
}

export default Counter