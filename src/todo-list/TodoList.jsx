import { useEffect, useCallback } from "react"
import { useState } from "react"
import { createTodos, getAllTodos } from "./todoService"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [creating, setCreating] = useState(false)
    const [createText, setCreateText] = useState("")

    const fetchTodos = useCallback(async () => {
        const response = await getAllTodos()
        const data = await response.json()
        setTodos(data)
    },[])

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])


    console.log("todos", todos)
    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-green-400 flex justify-center items-start">
            <div className="bg-zinc-100 w-full max-w-sm mt-40 rounded-md p-4 flex flex-col">
                {todos.map((t) => <TodoItem todo={t} key={t.id} fetch={fetchTodos}/>)}
                {creating ? (
                    <form className="flex flex-col"
                        onSubmit={async (e) => {
                            e.preventDefault()
                            await createTodos(createText)
                            fetchTodos()
                            setCreating(false)
                            setCreateText("")
                        }}>
                        <input className="bg-white border border-zinc-300 my-2 p-2 rounded-md text-blue-500"
                            value={createText}
                            placeholder="Enter text"
                            onChange={(e) => setCreateText(e.target.value)} />
                        <button className="bg-sky-500 text-white p-2 rounded-md mt-4">save</button>
                    </form>) : (<button
                        className="hover:bg-zinc-300 text-zinc-500 rounded-md p-2 mt-2"
                        onClick={() => setCreating(true)}>
                        <i className="fas fa-plus text-xl mr-2"></i>Add todo
                    </button>)}



            </div>

        </div>
    )
} 