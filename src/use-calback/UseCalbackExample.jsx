import { useEffect, useState, useCallback } from "react"

export const UseCalbackExample = () => {

    const [count, setCount] = useState(0)


    const doStuffVeryHeavyFunction = useCallback(() => {
        console.log("doStuffVeryHeavyFunction")
    }, [])

    useEffect(() => {
        doStuffVeryHeavyFunction()
    },
        [doStuffVeryHeavyFunction])

    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={() =>
                setCount((prev) => prev + 1)
            }>
                <div className="bg-yellow-300 px-4 py-2 rounded-md">increment</div>
            </button>
            <div className="ml-4 text-yellow-300 text-4xl">{count}</div>

        </div>
    )
}