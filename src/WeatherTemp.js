import React, { useState } from "react";

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
    <span className="current-temp">{props.celsius}</span>
        <span className="tempCF">
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
        <span className="current-temp">{fahrenheit()}</span>
        <span className="tempCF"><a href="/" onClick={showCelsius}>
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