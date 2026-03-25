import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { WeatherContext } from "./WeatherContext";
import { getWeatherByCity } from "../services/weatherService";
import type { WeatherItem } from "../types/weather";

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [city, setCity] = useState("Istanbul");
  const [weather, setWeather] = useState<WeatherItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherByCity(city);
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};