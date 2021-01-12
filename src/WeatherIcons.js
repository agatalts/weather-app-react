import React from "react";
import "./WeatherIcons.css"
import { WeatherIcon } from 'weather-react-icons';

export default function WeatherIcons() {
  return (<div><WeatherIcon iconId={200} name="owm" night className="iconLarge" /></div>);
}