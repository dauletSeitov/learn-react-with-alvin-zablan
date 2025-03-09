import Square from "./Square"

const CheckeredGrid = () => {

    const squares = []
    
    for(let i = 0 ; i < 400; i++){
        squares.push(<Square key={i}/>)
    }
    return (
        <div className="flex justify-center">
            <div className="m-4 border-8 border-black w-[616px] h-[616px] flex flex-wrap content-start">
                {squares}
            </div>
        </div>
    )
}



export default CheckeredGrid