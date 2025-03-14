import { useState } from "react"

const MessageProject = () => {

    const [text, setText] = useState("")
    const [messages, setMessages] = useState(["hey programmesrs!", "what is up"])

    const messageItems = messages.map((m, i)=><div className="border border-gray-300 px-6 py-3 m-2 rounded-full text-gray-600" key={i}>{m}</div>)
    return (
        <div className="flex flex-col items-center">
            <form className="m-8 flex" 
            onSubmit={(e)=>{
                e.preventDefault()
                setMessages((prev)=>[...prev, text])
                setText("")
            }}>
                <input className="border border-gray-300 p-2 rounded-md focus:outline-purple-600" 
                value={text} 
                placeholder="enter a message"
                onChange={
                    (e)=>setText(e.target.value)
                }></input>
                <button className="bg-purple-200 text-purple-800 px-8 rounded-md ml-2">Send</button>
            </form>
            <div className="flex flex-col max-w-lg w-full">
            {messageItems}
            </div>
        </div>

    )
}


export default MessageProject