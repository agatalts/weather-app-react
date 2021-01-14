import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
        return (<div><div>Forecast</div>Temp: {Math.round(forecast.list[0].main.temp)}</div>);
  } else {
  let apiKey = "791caf474f5e47b0c7a34593ae174a7e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecastResponse);
  return null;
  }
}