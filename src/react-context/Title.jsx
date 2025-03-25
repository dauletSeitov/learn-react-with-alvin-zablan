import { MessageContext } from "./MessageContext"
import { useContext } from "react"
export const Title = () => {

    const { message, setMessage } = useContext(MessageContext)

    console.log("message:", message)
    return (
        <div className="p-2 m-2 text-breen-600 border-4 border-green-400"
        onClick={()=> setMessage("ha ha")}>
            <div>Title</div>
            <div className="text-3xl text-center text-black">{message}</div>
        </div>
    )
}