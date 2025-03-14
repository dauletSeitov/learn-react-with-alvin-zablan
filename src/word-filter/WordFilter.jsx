import words from "./words"
import WordItems from "./WordItems"
import { useState } from "react"

const WordFilter = () => {

    const [text, setText] = useState("")
    const [filterText, setfilterText] = useState("")

    const wordItems = words.filter(i => i.includes(filterText)).map((w, i) => <WordItems word={w} key={i} />)
    return (
        <div className="flex flex-col items-center">
            <form onSubmit={(e) => {
                e.preventDefault()
                setfilterText(text)
            }} className="m-8 flex">
                <input className="p-2 bg-neutral-200 rounded-l-lg"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <button className="bg-emerald-400 text-white rounded-r-lg px-4 hover:bg-emerald-600">filter</button>
            </form>
            <div className="flex flex-wrap justify-center w-full max-w-lg">
                {wordItems}
            </div>
        </div>
    )
}

export default WordFilter