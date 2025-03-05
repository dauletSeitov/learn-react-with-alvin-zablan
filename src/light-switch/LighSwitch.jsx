import { useState } from "react"
import clsx from "clsx"

const LightSwitch = () => {
    const [toogle, setToogle] = useState(true)
    return (
        <div className={clsx("flex justify-center items-center border border-red h-screen", 
        toogle ? "bg-slate-600" : "bg-yellow-200")} >
            <button onClick={() => {

                setToogle((prev) => !prev)
            }}>
                <div className={clsx("h-8 w-6", toogle ? 'bg-slate-300' : 'bg-slate-200')}></div>
                <div className={clsx("h-8 w-6", toogle ? 'bg-slate-200' : 'bg-slate-300')}></div>
            </button>
        </div>
    )
}

export default LightSwitch