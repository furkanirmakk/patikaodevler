import { useWeather } from "../context/useWeather";
import WeatherCard from "./WeatherCard";
import "./Weather.css";

export default function WeatherList() {
  const { weather } = useWeather();

  return (
    <div className="weather-list">
      {weather.map((day, index) => (
        <WeatherCard key={day.dt} day={day} isToday={index === 0} />
      ))}
    </div>
  );
}