import { useState } from "react"
import clsx  from "clsx"
const ToogleButton = ({ onClick, label, enabled }) => {

    return (
        <div className="flex">
            <button className={clsx("p-1 w-12 rounded-full flex", enabled ? "bg-green-700 justify-start":"bg-zinc-300 justify-end")}
                onClick={onClick}>
                <div className="bg-white w-4 h-4 rounded-full">

                </div>


            </button>
            <div className="ml-2">{label}</div>
        </div>
    )

}


export default ToogleButton