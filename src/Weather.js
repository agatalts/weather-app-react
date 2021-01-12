import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready: false });
  function showWeather(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: "Sunday 10:00",
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed * 10) / 10,
  });
}

  if (weatherData.ready) {
  return (
    <div>
    <div className="city-container">
            <h1>{weatherData.city}</h1>
          </div>
    <div className="row">
    <div className="col-6">
      <ul className="today-day-time">
        <li>Last updated:</li>
        <li className="day-and-time">{weatherData.date}</li>
        <li>(local time)</li>
      </ul>
      <h3>
        <span className="current-temp">{weatherData.temperature}</span>
        <span className="tempCF">
          <a href="/" className="active">
            °C
          </a>{" "}
          |{" "}
          <a href="/" className="showFahrenheit">
            °F
          </a>
        </span>
      </h3>
      <h4 className="text-capitalize">{weatherData.description}</h4>
    </div>
    <div className="col-6 center-icon">
      <img
        src={weatherData.imgUrl} alt={weatherData.description}
        
      />
      <ul className="humidity-wind">
        <li>
          Humidity: {weatherData.humidity}%
        </li>
        <li>
          Wind: {weatherData.wind} km/h
        </li>
      </ul>
    </div>
    </div>
    </div>
    
  );

  } else {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=791caf474f5e47b0c7a34593ae174a7e&units=metric`;
      axios.get(apiUrl).then(showWeather);

   return "Loading...";
  }
}