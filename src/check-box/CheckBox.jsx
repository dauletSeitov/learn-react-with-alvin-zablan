import { useState } from "react"
import clsx from "clsx"

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <i className={clsx("fa-solid fa-futbol text-3xl m-4 text-orange-600", isChecked ? "animate-bounce" : "")}></i>
           
            <div className="flex items-center">
                <input
                className="accent-orange-500 w-5 h-5"
                    id="input-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(prev => !prev)}></input>
                <label className="ml-1" htmlFor="input-checkbox">check this box to bounce the ball</label>
            </div>
        </div>
    )
}


export default CheckBox