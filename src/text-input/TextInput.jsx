import { useState } from "react"

const TextInput = () => {

    const [text, setText] = useState("")
    return (
        <div className="bg-gray-600 h-screen flex flex-col justify-center items-center">
            <div className="text-3xl m-8">
                {text}
            </div>
            <input type="text" className="bg-gray-400 rounded-lg p-2 text-gray-700" value={text}
                onChange={(e) => setText(e.target.value)}></input>
        </div>

    )


}


export default TextInput 