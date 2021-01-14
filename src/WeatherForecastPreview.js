import React from "react";
import WeatherForecastIcons from "./WeatherForecastIcons";
import "./WeatherForecastPreview.css";


export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date((props.data.dt + props.timezone) * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

function temperature() {
  let temperature = Math.round(props.data.main.temp);
  return `${temperature}°C`;
}

  return (
    <div>
      <div className="row forecastDisplay">
      <div className="col-7 forecastTemp">
            <ul>
              <li>{hours()}</li>
              <li><strong>{temperature()}</strong></li>
            </ul>
          </div>
          <div className="col-5 weatherIconSmall"><WeatherForecastIcons code={props.data.weather[0].icon} />
          </div>
          </div>
    </div>
  )
}