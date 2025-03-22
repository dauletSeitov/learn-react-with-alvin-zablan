import { useEffect, useState } from "react"
import Joke from "./Joke"


const RandomJoke = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const [joke, setJoke] = useState(null)

    const fetchJoke = () => {
        fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes")
            .then(data => data.json())
            .then(data => {
                setShowAnswer(false)
                setJoke(data)
            })

    }
    useEffect(()=>{
        fetchJoke()
    }
    ,[])
    console.log(showAnswer)
    return (
        <div className="flex flex-col border border-black items-center justify-center">
            {joke && <Joke joke={joke} show={showAnswer} />}
            <button onClick={() => setShowAnswer((prev) => !prev)} className="bg-green-500 text-green-200 rounded-lg p-4">reveal answer</button>
            <button onClick={() => fetchJoke()} className="m-4 bg-red-500 text-green-200 rounded-lg p-4">get new joke</button>
        </div>
    )
}

export default RandomJoke