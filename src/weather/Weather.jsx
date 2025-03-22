import { useEffect, useState } from "react"
import WeatherCard from "./WeatherCard"

const Weather = () => {


    const [weatherDays, setWeatherDays] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    const fetchWeather = async () => {
        setIsLoading(true)
        const response = await fetch("https://api.react-formula.com/learning-api/demos/weather-forecast/weather")
        const data = await response.json()
        console.log("data", data)
        setWeatherDays(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    const weatherCards = weatherDays.map((w, i) => <WeatherCard key={i} weather={w} />)

    return (
        <div className="relative flex justify-center border border-red-500 min-h-screen">
            <button className="absolute text-xl text-orange-500 bg-orange-100 px-4 py-2 rounded-md top-4 right-4"
                onClick={fetchWeather}>
                <i className="fa-solid fa-rotate-right"></i>
            </button>
            <div className="w-full max-w-2xl flex justify-center border border-red-500 items-center">
                {isLoading ? < i className="fa-solid fa-face-smile animate-spin text-2xl text-orange-500 border border-red-500" /> : weatherCards}
            </div>
        </div>
    )

}


export default Weather 