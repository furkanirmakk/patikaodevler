export interface WeatherItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
}

export interface WeatherResponse {
  list: WeatherItem[];
  city: {
    name: string;
  };
}