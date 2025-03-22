import { useEffect, useState } from "react"

const API_MESSAGE = "http://localhost:8080/messages"
const MessageBox = () => {

    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState("")
    const [text, setText] = useState("")

    const fetchMessages = () => {
        fetch(API_MESSAGE)
            .then(response => response.json())
            .then(data => setMessages(data))
    }


    useEffect(() => {
        fetchMessages()
    }, [])
    const messageItems = messages.map((m, i) => (
        <div
            key={i}
            className="p-6 m-4 border border-gray-300 rounded-md shadow-md"
        >
            <div className="mb-2 text-lg font-medium">{m.username}</div>
            <div>{m.message}</div>
        </div>
    ))

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ action: "submit", username, text })
        fetch(API_MESSAGE, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, message: text })
        }).then(()=> {
            fetchMessages()
            setUsername("")
            setText("")
        })

    }

    return (
        <div className="flex flec-col justify-center border boder-gray-300">
            <div className="flex flex-col w-full max-w-xl border boder-gray-300">
                {messageItems ? messageItems : <div></div>}

                <form onSubmit={handleSubmit}>
                    <input className="p-1 m-2 border boder-gray-300 rounded-md w-24"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}></input>
                    <input className="p-1 m-2 border boder-gray-300 rounded-md w-80"
                        onChange={(e) => setText(e.target.value)}
                        value={text}></input>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md">post</button>

                </form>
            </div>
        </div>
    )
}


export default MessageBox