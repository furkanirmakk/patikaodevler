import type { WeatherResponse } from "../types/weather";

const API_KEY = "3e96ab8f7feb49b3db72db8d677dc6d9"; // 🔴 OpenWeather API key

export const getWeatherByCity = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    throw new Error("Hava durumu alınamadı");
  }

  const data: WeatherResponse = await res.json();

  // 3 saatlik veriyi 7 güne indiriyoruz
  const daily = data.list.filter((_, index) => index % 8 === 0);

  return daily;
};