import {AVAILABLE_CITY, getWeather} from "../../data/weather.js";
import {useEffect, useState} from "react";
import WeatherCard from "../weather-card/WeatherCard.jsx";

const Home = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = (searchWeather) => {
        const data = getWeather(searchWeather)
        setWeather(data);
    }

    useEffect(() => {
        fetchWeather('colombo');
    }, []);

    console.log(weather)

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-bold text-white">
        Sri Lanka City Weather Report
      </h1>

      <div className="flex flex-wrap gap-2 justify-center max-w-md ">
        {AVAILABLE_CITY.map((city)=> (
        <button
            key={city}
            className="px-3 py-1 rounded-full bg-white/20 text-white text-sm"
            onClick={() => fetchWeather(city)}
            >
            {city}
        </button>
        ))}
        </div>

        {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;