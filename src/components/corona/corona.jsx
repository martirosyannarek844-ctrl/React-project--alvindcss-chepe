import { useState, useEffect } from "react";

export default function Corona () {
  const API_KEY = "cb36d56d59a6202351fe6cff27d8977a";

  const [city, setCity] = useState("Yerevan");
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState("");

  const getWeather = async (cityName) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();
    if (data.cod === 200) setWeather(data);
  };

  useEffect(() => {
    getWeather(city);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center text-white flex flex-col items-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df")' }}>
      <h1 className="mt-10 text-4xl tracking-wider">CITY WEATHER WIDGET</h1>

      {weather && (
        <div className="mt-10 w-[720px] h-[360px] flex shadow-2xl">
          {/* Left */}
          <div
            className="flex-1 relative p-8 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c")' }}
          >
            <h2 className="text-2xl">{weather.name} City</h2>
            <h3 className="mt-1">{weather.name}</h3>

            <div className="absolute bottom-20 text-2xl">{time}</div>
            <div className="absolute bottom-2 text-7xl">
              {Math.round(weather.main.temp)}°C
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 bg-black p-8">
            <div className="text-center text-8xl">☁</div>
            <h2 className="text-center mt-2">{weather.weather[0].main}</h2>

            <div className="mt-5 space-y-2">
              <p className="border-b border-gray-500 pb-2">
                Now {Math.round(weather.main.temp)}°C
              </p>
              <p className="border-b border-gray-500 pb-2">
                Humidity {weather.main.humidity}%
              </p>
              <p className="border-b border-gray-500 pb-2">
                Wind {weather.wind.speed} km/h
              </p>
              <p className="border-b border-gray-500 pb-2">
                Pressure {weather.main.pressure}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="mt-8">
        <input
          type="text"
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
          className="px-2 py-1 w-52"
        />
        <button
          onClick={() => getWeather(city)}
          className="ml-2 px-3 py-1 bg-blue-700 text-white hover:bg-blue-800"
        >
          Click me
        </button>
      </div>

      <p className="mt-5 text-sm">
        2025 City Weather Widget All Rights Reserved | Design by W3layouts
      </p>
    </div>
  );
}