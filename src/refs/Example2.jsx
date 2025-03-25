import { useRef } from "react"

export const Example2 = () => {

    const inputRef = useRef(null)

    return (
        <div className="flex flex-col h-screen bg-yellow-100">
            <h2 className="p-8 text-3xl font-bold text-amber-700">Example 2</h2>
            <div className="flex items-center justify-center flex-1">
                <button className="px-8 py-2 mx-8 text-white bg-amber-600 rounded-full"
                    onClick={() => {
                        inputRef.current.focus()
                    }}>
                    click to focus on input
                </button>
                <input className="px-4 py-2 bg-yellow-200 border-2 border-yellow-400 rounded-md w-80"
                    placeholder="this is an input"
                    ref={inputRef}
                ></input>
            </div>
        </div>
    )
}