import { use } from "react"
import CatItem from "./CatItem"
import cats from "./cats"
import { useState } from "react"

const CatDirectory = () => {

    const [catsState, setCatsState] = useState(cats)
    const [name, setName] = useState("")
    const [age, setAge] = useState(2)
    const [imageUrl, setImageUrl] = useState("")
    const [interests, setInterests] = useState("")

    const catItems = catsState.map((c, i) => <CatItem cat={c} key={i} />)
    return (
        <div className="flex flex-col items-center justify-center py-10 bg-indigo-50">

            <form className="bg-slate-50 rounded-lg overflow-clip shadow-lg"
                onSubmit={e => {
                    e.preventDefault()
                    console.log(e)
                    const newCat = {
                        name,
                        age,
                        imageUrl,
                        description: interests
                    }
                    setCatsState(prev => [...prev, newCat])

                    setName("")
                    setAge(2)
                    setImageUrl("")
                    setInterests("")

                }

                }>
                <div className="bg-purple-600 text-white text-center py-2 text-xl">Creat a Cat Profile</div>
                <div className="flex flex-col p-4">
                    <div className="flex flex-col ">
                        <label
                            htmlFor="cat-name"
                            className="mx-2 text-slate-500">Name</label>
                        <input
                            id="name"
                            className="bg-white m-2 p-2 rounded-md text-sm border border-slate-200 flex-1"
                            typr="text"
                            placeholder="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <label
                                htmlFor="cat-age"
                                className="mx-2 text-slate-500">Age</label>
                            <input
                                id="cat-age"
                                className="bg-white m-2 w-14 p-2 rounded-md text-sm  border border-slate-200"
                                type="number"
                                placeholder="age"
                                value={age}
                                onChange={e => setAge(Number(e.target.value))}
                                required
                                min={1}
                                max={25}
                            ></input>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="cat-image"
                                className="mx-2 text-slate-500">Image</label>
                            <input
                                id="cat-image"
                                className="bg-white m-2  p-2 rounded-md text-sm  border border-slate-200"
                                typr="text"
                                placeholder="provide an image url"
                                value={imageUrl}
                                onChange={e => setImageUrl(e.target.value)}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="cat-image"
                            className="mx-2 text-slate-500">Interests</label>
                        <textarea
                            row={3}
                            className="bg-white m-2 p-2 rounded-md text-sm  border border-slate-200"
                            value={interests}
                            onChange={e => setInterests(e.target.value)}
                            required
                            maxLength={80}
                        ></textarea>
                    </div>
                </div>
                <div className="px-6 pb-4">
                    <button className="w-full bg-rose-300 py-2 rounded-lg text-purple-800 text-2xl">create</button>
                </div>
            </form >
            <div className="flex flex-col items-center w-full max-w-2xl">
                {catItems}
            </div>
        </div>
    )
}

export default CatDirectory