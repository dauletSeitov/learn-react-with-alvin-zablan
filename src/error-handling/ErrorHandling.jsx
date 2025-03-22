import { useEffect, useState } from "react"
import WeatherCard from "../weather/WeatherCard"
import ErrorMessage from "./ErrorMessage"

const ErrorHandling = () => {

    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)

    const fetchWeather = async () => {
        const response = await fetch("https://api.react-formula.com/learning-api/demos/error-handling/weather")
        if (response.status === 200) {
            const data = await response.json()
            setWeather(data)
            setError(null)
        } else {
            const errodData = await response.json()
            setError(errodData)
            setWeather(null)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (
        <div className="relative flex justify-center p-20">
            <button className="absolute px-4 py-2 rounded-lg bg-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-300 top-2 left-2"
            onClick={fetchWeather}>
                <i className="fas fa-redo"></i>
            </button>
            {weather && <WeatherCard weather={weather} />}
            {error && <ErrorMessage message= {error.error_message}/>}
        </div>
    )
}


export default ErrorHandling