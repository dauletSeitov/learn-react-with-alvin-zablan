const API = "http://localhost:8080/todo"

export const getAllTodos = () => {
    return fetch(API)
}

export const createTodos = (text) => {
    return fetch(API, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    })
}

export const deleteTodo = (id) => {
    return fetch(`${API}/${id}`, { method: 'DELETE' })
}

export const updateTodos = (id, body) => {
    return fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
}