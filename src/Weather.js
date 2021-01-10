import React from "react";
import axios from "axios";

export default function Weather() {
  function handleSubmit(response) {
   alert(`It is ${response.data.main.temp} C in London`);
  }
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=791caf474f5e47b0c7a34593ae174a7e&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return <h2>Hello</h2>;
  }