import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { WeatherItem } from "../types/weather";

export interface WeatherContextType {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  weather: WeatherItem[];
}

export const WeatherContext = createContext<WeatherContextType | null>(null);