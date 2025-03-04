import { useState } from "react"

const ClickEvent = () => {

    const [message, setMessage] = useState("Bagdaulet!")
    return (
        <div className="flex flex-col h-screen items-center justify-center border border-black-3000">
            <div className="text-3xl text-stone-400">
                {message}
            </div>
            <div>
                <div className="m-4">
                    <button onClick={() => setMessage("one")} className="m-2 px-2 py-2 text-white bg-green-400 rounded-md">one</button>
                    <button onClick={() => setMessage("two")} className="m-2 px-2 py-2 text-white bg-red-400 rounded-md">two</button>
                    <button onClick={() => setMessage("three")} className="m-2 px-2 py-2 text-white bg-violet-400 rounded-md">three</button>
                </div>
            </div>
        </div>
    )

}


export default ClickEvent