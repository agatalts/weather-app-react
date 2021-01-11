import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";


export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Sunday 10:00",
    temperature: 12,
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: 30,
    wind: 10,
  };
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
      <h4>{weatherData.description}</h4>
    </div>
    <div className="col-6 center-icon">
      <img
        src={weatherData.imgUrl} alt={weatherData.description}
        
      />
      <ul className="humidity-wind">
        <li>
          Humidity: {weatherData.humidity} %
        </li>
        <li>
          Wind: {weatherData.wind} km/h
        </li>
      </ul>
    </div>
    </div>
    </div>
    
  );
}
