import type { WeatherItem } from "../types/weather";
import "./Weather.css";

interface WeatherCardProps {
  day: WeatherItem;
  isToday: boolean;
}

export default function WeatherCard({ day, isToday }: WeatherCardProps) {
  const date = new Date(day.dt_txt);
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className={`weather-card ${isToday ? "today-card" : ""}`}>
      <h3 className="day-name">{dayName}</h3>

      <div className="icon-wrapper">
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day.weather[0].description}
        />
      </div>

      <p className="temperature">
        {Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°
      </p>
    </div>
  );
}