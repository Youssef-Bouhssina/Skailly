// Configuration for Geo API requests
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "517584897bmsh79fd7f96cb0b116p1d596cjsn388d7338f31d", // Your API key for authentication
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com", // API host for Geo Database
  },
};

// Base URL for accessing Geo Database API
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// Base URL and API key for accessing OpenWeatherMap API for weather data
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "6238f07bb857fd7d2ca163d60b70f101";