import { useState } from "react"

const makeInitialItems = (number) => {
    console.log("this should be called 1 time!!!")

    const items = []
    for (let i = 0; i < number; i++) {
        items.push("items " + i)
    }
    return items
}

export const DefaultLecture = () => {
    const [items, setItems] = useState(()=>makeInitialItems(20))
    const [darkMode, setdarkMode] = useState(false)


    return (
        <div className={darkMode ? "text-white bg-black" : "text-black bg-white"}>
            <button onClick={() => setdarkMode(prev => !prev)}>dark mode</button>
            {items.map((item, index) => <div key={index} >{item}</div>)}

        </div>
    )

}