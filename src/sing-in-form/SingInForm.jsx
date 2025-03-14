import { useState } from "react"

const SingInForm = () => {

    const [userName, setUserName] = useState("")
    const [password, setpassword] = useState("")

    console.log(userName)
    console.log(password)
    return (
        <div className="flex justify-center p-20">
            <form className="border border-neutral-400 rounded-lg flex flex-col shadow-lg"
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(e)
                }
                }>
                <div className="p-4 flex flex-col">
                    <div className="text-2xl text-neutral-600 mb-4">Sign-in</div>
                    <input
                        type="text" value={userName}
                        className="p-2 my-4 border border-neutral-500 rounded-md text-neutral-600"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="enter username"
                    ></input>
                    <input
                        type="password" value={password}
                        className="p-2 my-4 border border-neutral-500 rounded-md text-neutral-600"
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="enter password"
                    ></input>
                </div>
                <button className="bg-purple-500 py-2 text-white rounded-b-lg">submit</button>
            </form>
        </div>
    )

}

export default SingInForm