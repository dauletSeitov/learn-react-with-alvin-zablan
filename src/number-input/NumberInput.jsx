import { useState } from "react"

const NumberInput = () => {

    const [age, setAge] = useState(20)
    const [error, setError] = useState("")

    console.log(age)

    return (
        <div className="flex justify-center items-center h-screen bg-slate-50">
            <div className="bg-white border border-slate-200 rounded-md p-8 flex flex-col items-center w-full max-w-md">
                <label htmlFor="imput" className="m-2">age</label>
                <input
                    id="number-imput"
                    type="number"
                    className="border border-slate-200 rounded-md w-20"
                    value={age}
                    //min={18}
                    onChange={e => {
                        const age = Number(e.target.value)
                        if(age < 18){
                            setError("Must be 18 or older")
                        } else {
                            setError("")
                        }
                        setAge(Number(e.target.value))
                    }}
                ></input>
                <div className="text-red-600 h-8 m-4">{error}</div>
            </div>

        </div>
    )
}

export default NumberInput