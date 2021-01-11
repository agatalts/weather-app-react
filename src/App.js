import React from "react";
import Search from "./Search.js";
import Weather from "./Weather.js";
import Weather2 from "./Weather2.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Search />
          <div className="city-container">
            <h1>New York</h1>
          </div>
          <div className="row">
            <Weather />
            <Weather2 />
          </div>
        </div>
        <div className="col-4" id="forecast"></div>
      </div>
    </div>
  );
}
