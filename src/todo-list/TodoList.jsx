import { useEffect } from "react"
import { useState } from "react"
import { getAllTodos } from "./todoService"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {

    const [todos, setTodos] = useState([])

    const fetchTodos = async () => {
        const response = await getAllTodos()
        const data = await response.json()
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-green-400 flex justify-center items-start">
            <div className="bg-zinc-200 w-full max-w-sm mt-40 rounded-md">
                {todos.map((t, i) => <TodoItem todo={t} key={i} />)}
            </div>

        </div>
    )
} 