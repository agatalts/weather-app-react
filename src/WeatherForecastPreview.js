import React from "react";
import WeatherForecastIcons from "./WeatherForecastIcons";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

function temperature() {
  let temperature = Math.round(props.data.main.temp);
  return `${temperature}°C`;
}

  return (
    <div>
      <div className="row next-day-container">
      <div className="col-7 hours-and-temp">
            <ul className="next-day-temp">
              <li>{hours()}</li>
              <li><strong>{temperature()}</strong></li>
            </ul>
          </div>
          <div className="col-5 for-weather-icon-small"><WeatherForecastIcons code={props.data.weather[0].icon} className="iconSize" />
          </div>
          </div>
    </div>
  )
}