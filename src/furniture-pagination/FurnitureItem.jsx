const FurnitureItem = ({ furniture }) => {

    console.log("furniture:", furniture)
    return (
        <div>
            <div>{furniture.name}</div>
            <div>{furniture.description}</div>
            <div>{furniture.imageURL}</div>
        </div>
    )
}

export default FurnitureItem