const WEATHER_DATA = {
  anuradhapura: {
    city_name: "Anuradhapura",
    temperature: 31,
    humidity: 78,
    wind: 14,
  },
  colombo: {
    city_name: "Colombo",
    temperature: 32,
    humidity: 79,
    wind: 15,
  },
  jaffna: {
    city_name: "Jaffna",
    temperature: 30,
    humidity: 76,
    wind: 12,
  },
  kandy: {
    city_name: "Kandy",
    temperature: 35,
    humidity: 80,
    wind: 10,
  },
};

export const AVAILABLE_CITY = Object.values(WEATHER_DATA).map(
    (city)=> city.city_name,
    );

export const getWeather = (city) => {
  const key = city.trim().toLowerCase();

  return WEATHER_DATA[key];
}


























