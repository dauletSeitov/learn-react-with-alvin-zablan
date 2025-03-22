import { useState } from "react"
import StateInfo from "./StateInfo.jsx"
import ErrorMessage from "../error-handling/ErrorMessage.jsx"

const States = () => {

    const [text, setText] = useState("")
    const [error, setError] = useState(null)
    const [state, setState] = useState(null)

    const fetchState = async () => {
        const result = await fetch(`https://api.react-formula.com/learning-api/demos/states-project/states/${text}`)
        if (result.status === 200) {
            const data = await result.json()
            setState(data)
            setError(null)
        } else {
            const data = await result.json()
            setError(data)
            setState(null)
        }
    }

    console.log("state:", state)
    return (
        <div className="flex justify-center p-8">
            <div className="w-full max-w-2xl flex justify-center flex-col items-center">
                <form className="mb-20"
                    onSubmit={(e) => {
                        e.preventDefault()
                        fetchState()
                    }}>
                    <input onChange={e => setText(e.target.value)}
                        className="p-1 mr-4 border border-zinc-300"
                        placeholder="unter US state"
                        value={text}
                    />
                    <button className="px-4 py-1 text-teal-600 bg-teal-300 rounded-md">search</button>
                </form>
                {state && <StateInfo state={state} />}
                {error && <ErrorMessage message={error.error} />}
            </div>
        </div >
    )
}

export default States