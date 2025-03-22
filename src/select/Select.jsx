import { useState } from "react"
import clsx from "clsx"

const Select = () => {
    const [color, setColor] = useState("bg-red-400")
    return (
        <div className={clsx("flex justify-center items-center h-screen", color)}>
            <label
                htmlFor="color"
                className="mr-2"
            >pick a color:</label>
            <select id="color"
                className="p-2 rounded-md shadow-md"
                value={color}
                onChange={e => setColor(e.target.value)}>
                <option value="bg-red-400">red</option>
                <option value="bg-blue-400">blue</option>
                <option value="bg-green-400">green</option>
                <option value="bg-yellow-400">yellow</option>
                <option value="bg-purple-400">purple</option>
            </select>
        </div>
    )
}

export default Select 