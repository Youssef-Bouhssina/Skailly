import React from "react";
import "./current-weather.css";

// Component to display the current weather data.
// Takes a 'data' prop, which should be an object containing weather information.
const CurrentWeather = ({ data }) => {
  return (
      // Main container for the weather display
      <div className="weather">
        {/* Top section: City name, weather description, and icon */}
        <div className="top">
          <div>
            {/* Display the city name */}
            <p className="city">{data.city}</p>
            {/* Display the weather description */}
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          {/* Display the weather icon */}
          <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
          />
        </div>

        {/* Bottom section: Temperature and detailed weather parameters */}
        <div className="bottom">
          {/* Display the current temperature */}
          <p className="temperature">{Math.round(data.main.temp)}°C</p>

          {/* Container for detailed weather parameters */}
          <div className="details">
            {/* Empty row for spacing. Consider if this is necessary */}
            <div className="parameter-row"></div>

            {/* Feels like temperature */}
            <div className="parameter-row">
              <span className="parameter-label">Feels like :</span>
              <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
            </div>

            {/* Wind speed */}
            <div className="parameter-row">
              <span className="parameter-label">Wind :</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>

            {/* Humidity */}
            <div className="parameter-row">
              <span className="parameter-label">Humidity :</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>

            {/* Pressure */}
            <div className="parameter-row">
              <span className="parameter-label">Pressure :</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CurrentWeather;