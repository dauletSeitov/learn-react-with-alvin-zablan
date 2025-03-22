import { useState } from "react"

const Joke = ({ joke, show }) => {


    return (


        <div className="p-4 flex flex-col items-center">


            <div className="text-3xl text-gray-600">{joke.question}</div>
            {show && <div className="m-8 text-lg text-blue-500">{joke.answer}</div>}

        </div>

    )
}

export default Joke