import React, { useState } from "react";
import "./WeatherTemp.css";



export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
 return (
   <div>
     <h3>
    <span>{props.celsius}</span>
        <span className="changeCelsiusFahrenheit">
          °C
          {" "}
          |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </h3>
    </div>
  )
  } else {
    return (
    <div>
            <h3>
        <span>{fahrenheit()}</span>
        <span className="changeCelsiusFahrenheit"><a href="/" onClick={showCelsius}>
          °C</a>
          {" "}
          |{" "}
          
            °F
          
        </span>
      </h3>
    </div>
  )
  }

  
 
}