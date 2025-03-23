import { useState } from "react"
import { deleteTodo as deleteTodo, updateTodos } from "./todoService"
import clsx from "clsx"
export const TodoItem = ({ todo, fetch }) => {


    console.log("todo", todo)
    const [editing, setEditing] = useState(false)
    const [editingText, setEditingText] = useState(todo.text)
    return (
        <div className="bg-white border border-zinc-300 my-2 p-2 rounded-md flex justify-between">
            <div className="text-zinc-600 flex flex-1">
                <button onClick={async () => {
                    await updateTodos(todo.id, { ...todo, complete: !todo.complete })
                    await fetch()
                }}>
                    <i className={clsx("far mr-2 text-xl", todo.complete ? "fa-check-circle text-green-600" : "fa-circle text-stone-300")} />
                </button>
                {editing ? <form className="flex flex-1"
                    onSubmit={async (e) => {
                        e.preventDefault()
                        await updateTodos(todo.id, { ...todo, text: editingText })
                        await fetch()
                        setEditing(false)
                    }}>
                    <input className="border border-zinc-200 p-1 rounded-md flex-1 text-sky-500"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}></input>
                    <button className="bg-sky-400 text-white px-2 rounded-md ml-2">save</button>

                </form> : <div>{todo.text}</div>}

            </div>
            {!editing && <div>
                <button onClick={() => {
                    setEditing(true)
                }}>
                    <i className="fas fa-pen text-zinc-300 hover:text-sky-500 mx-1"></i>
                </button>
                <button onClick={async () => {
                    await deleteTodo(todo.id)
                    await fetch()

                }}>
                    <i className="fas fa-trash text-zinc-300 hover:text-red-600 mx-1"></i>
                </button>
            </div>}


        </div>
    )


}