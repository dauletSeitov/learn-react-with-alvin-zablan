import { useState } from "react";

const Stacker = () => {

    const [get, set] = useState(4)

    const blocks = []

    for (let i = 0; i < get; i++) {
        blocks.push(<div key = {i} className="w-24 h-8 bg-green-400 m-2"></div>)
    }

    return (
        <div className="flex flex-col border-2 border-red-500 h-screen items-center justify-end">
            <div className="border-b-4 border-neutral-500 p-2">
                {blocks}
            </div>
            <div>
                <button onClick={()=>set(prev=>prev-1)} className="m-2 p-2 rounding-lg bg-yellow-200 text-yellow-600">remove block</button>
                <button onClick={()=>set(prev=>prev+1)} className="m-2 p-2 rounding-lg bg-blue-200 text-blue-600">add block</button>
            </div>


        </div >

    )


}

export default Stacker;