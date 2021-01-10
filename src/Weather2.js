import React from "react";
import "./Weather2.css";

export default function Weather2() {
  return (
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
  );
}
