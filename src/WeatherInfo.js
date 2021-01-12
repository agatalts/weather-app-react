import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
 <div className="city-container">
            <h1>{props.data.city}</h1>
          </div>
    <div className="row">
    <div className="col-6">
      <ul className="today-day-time">
        <li>Last updated:</li>
        <li className="day-and-time"><FormattedDate date={props.data.date} /></li>
        <li>(local time)</li>
      </ul>
      <h3>
        <span className="current-temp">{props.data.temperature}</span>
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
      <h4 className="text-capitalize">{props.data.description}</h4>
    </div>
    <div className="col-6 center-icon">
      <img
        src={props.data.imgUrl} alt={props.data.description}
        
      />
      <ul className="humidity-wind">
        <li>
          Humidity: {props.data.humidity}%
        </li>
        <li>
          Wind: {props.data.wind} km/h
        </li>
      </ul>
    </div>
    </div>
</div>

  );
}