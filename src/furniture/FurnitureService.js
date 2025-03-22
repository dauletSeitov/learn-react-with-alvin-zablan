const API_MESSAGE = "http://localhost:8080/furniture"

export const getAllFurnitures = () => {
    return fetch(API_MESSAGE)
}

export const deleteFurniture = (furnitureId) => {
    console.log("furnitureId: ", furnitureId)
    return fetch(`${API_MESSAGE}/${furnitureId}`, {
        method: 'DELETE'
    })
}

export const updateFurniture = (furnitureId, body) => {
    console.log("furnitureId: ", furnitureId)
    return fetch(`${API_MESSAGE}/${furnitureId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
}