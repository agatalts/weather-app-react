import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
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
  );
}
