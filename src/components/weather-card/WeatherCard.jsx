const WeatherCard = ({weather}) => {
    console.log(weather)
    return (
        <div className="bg bg-white w-full max-w-md text-center p-8 rounded-2xl mt-8">
        <h1 className="text-2xl font-semibold text-gray-700">{weather.city_name}</h1>
            <p className="text-5xl font-bold text-gray-600">{weather.temperature}°C</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500">Humidity</p>
                    <p className="text-xl font-semibold text-gray-900">
                        {weather.humidity}%</p>

                </div>

                    <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500">Wind</p>
                    <p className="text-xl font-semibold text-gray-900">{weather.wind} km/h</p>
                </div>
                </div>
            </div>

    )
}

export default WeatherCard