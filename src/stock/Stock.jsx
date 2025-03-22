import { useState } from "react"
import { useEffect } from "react"
import StockItem from "./StockItem"

const Stock = () => {

    const [stock, setStock] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // const fetchStocks = () => {
    //     fetch("https://api.react-formula.com/learning-api/demos/stocks-project/stocks")
    //         .then(data => data.json())
    //         .then(data => {
    //             setStock(data)
    //             setIsLoading(false)
    //             console.log("fetchStocks"), data
    //         })
    // }

    const fetchStocks = async () => {
        const response = await fetch("https://api.react-formula.com/learning-api/demos/stocks-project/stocks")
        const data = await response.json()
        setStock(data)
        setIsLoading(false)
    }

    console.log("stock", stock)
    useEffect(() => {
        fetchStocks()
    }, [])

    const stockItems = stock.map((s, i) => <StockItem key={i} stock={s} />)

    return (
        <div className="flex justify-center bg-slate-100">
            <div className="border border-red-500 w-full max-w-md flex justify-center min-h-screen items-center">
                {isLoading ? <i className="fa-solid fa-snowflake text-2xl text-blue-400 animate-spin"></i> :
                    <div className="flex flex-col w-full">{stockItems}</div>}
            </div>

        </div>
    )
}


export default Stock