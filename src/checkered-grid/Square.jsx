import { useState } from "react"
import clsx from "clsx"

const Square = ()=>{

    const [get,set] = useState(true)

    return (
        
        <div
        onClick={()=>set((prev)=>!prev)} 
        className={clsx("h-[30px] w-[30px] border-2 border-stone-400 cursor-pointer", get ? "bg-stone-300" : "bg-stone-500" )}>
        </div>
        
    )

}


export default Square