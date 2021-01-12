import React from "react";

import Weather from "./Weather.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-8">
          
          
            <Weather defaultCity="Reykjavik" />
          </div>
        <div className="col-4"></div>
      </div>
    </div>
    <div className="openSource">
      <h5>
        <a href="https://github.com/agatalts/weather-app-react" target="_blank" rel="noopener noreferrer">
          Open-source code
        </a>{" "}
        by Agata Latos
      </h5>
    </div></div>
    
  );
}
