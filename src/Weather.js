import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="row">
    <div className="col-6">
      <ul className="today-day-time">
        <li>Last updated:</li>
        <li className="day-and-time">Sunday 10:00</li>
        <li>(local time)</li>
      </ul>
      <h3>
        <span className="current-temp">10</span>
        <span className="tempCF">
          <a href="/" id="showCelcius" className="active">
            °C
          </a>{" "}
          |{" "}
          <a href="/" id="showFahrenheit">
            °F
          </a>
        </span>
      </h3>
      <h4>Clear</h4>
    </div>
    <div className="col-6 center-icon">
      <img
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="Clear"
        id="icon"
      />
      <ul className="humidity-wind">
        <li>
          Humidity: <span id="humidity">30</span> %
        </li>
        <li>
          Wind: <span id="wind">10</span> km/h
        </li>
      </ul>
    </div>
    </div>
  );
}
