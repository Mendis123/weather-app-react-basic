import { AVAILABLE_CITY } from "../../data/weather.js";

const Home = () => {

  console.log(AVAILABLE_CITY);

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-bold text-white">
        Sri Lanka City Weather Report
      </h1>

      <div
        className="flex flex-wrap gap-2 justify-center max-w-md "
      >
        {AVAILABLE_CITY.map((city)=> (
        <div key={city}
        className="px-3 py-1 rounded-full bg-white/20 text-white text-sm"
        >{city}</div>
        ))}
        </div>
    </div>
  );
};

export default Home;