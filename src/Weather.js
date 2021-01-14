import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready: false });
  const [city, setCity] = useState (props.defaultCity);
  function showWeather(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date((response.data.dt + response.data.timezone) * 1000),
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed * 10) / 10,
  });
}

function handleCityChange(event) {
  setCity(event.target.value);
  
}

function handleSubmit(event) {
  event.preventDefault();
  searchCity();
  

}

function searchCity() {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=791caf474f5e47b0c7a34593ae174a7e&units=metric`;
      axios.get(apiUrl).then(showWeather);
}

  if (weatherData.ready) {
  return (
    
      
        <div className="container">
        <div className="row">
        <div className="col-8">
       <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Change location"
          className="changeLocation"
          autoComplete="off"
          onChange={handleCityChange}
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    
   <WeatherInfo data={weatherData} />
     </div>
        <div className="col-4">
          
          <WeatherForecast city={weatherData.city} />
          
          </div>
      </div></div>
    
          
  );

  } else {
  searchCity();
   return "Loading...";
  }
}