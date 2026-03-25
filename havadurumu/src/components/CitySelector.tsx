import { useWeather } from "../context/useWeather";
import "./Weather.css";

const cities = ["Istanbul", "Ankara", "Izmir", "Malatya", "Antalya", "Bursa"];

export default function CitySelector() {
  const { city, setCity } = useWeather();

  return (
    <select
      className="city-select"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    >
      {cities.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}