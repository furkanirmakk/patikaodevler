import { WeatherProvider } from "./context/WeatherProvider";
import CitySelector from "./components/CitySelector";
import WeatherList from "./components/WeatherList";
import "./App.css";

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <div className="weather-container">
          <div className="top-bar">
            <CitySelector />
          </div>

          <WeatherList />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;