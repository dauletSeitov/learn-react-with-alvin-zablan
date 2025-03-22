const WEATHER_ICONS ={
    Sunny: <i className="text-orange-400 fa-solid fa-sun"></i>,
    "Partly Cloudy": <i className="fa-solid fa-cloud-sun text-orange-400"></i>,
    Cloudy: <i className="fa-solid fa-cloud text-slate-500"></i>,
    Rain: <i className="fa-solid fa-cloud-showers-water text-slate-400"></i>,
    Snow: <i className="fa-solid fa-snowflake text-blue-300"></i>


}


const WeatherCard = ({weather}) => {

    return (
        <div className="flex flex-col items-center p-2 m-2 bg-white border rounded-md overflow-clip border-stone-200 w-28">
            <div className="text-lg text-stone-600">{weather.day}</div>
            <div className="my-4 text-4xl">
               {WEATHER_ICONS[weather.description]}
            </div>
            <div className="flex justify-between w-full text-sm">
                <div className="text-stone-600">{weather.high_temp}F</div>
                <div className="text-stone-400">{weather.low_temp}F</div>
            </div>
        </div>
    )
}


export default WeatherCard