import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";

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
<WeatherTemp celsius={props.data.temperature}/>
      <h4 className="text-capitalize">{props.data.description}</h4>
    </div>
    <div className="col-6 center-icon">
      <WeatherIcons code={props.data.icon} alt={props.data.description} />
      
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