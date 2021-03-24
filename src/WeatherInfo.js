import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
  return (
  <div className="WeatherInfo">
  <h1>{props.data.city}</h1>
  <div className="description">
    <ul>
      <li> <FormattedDate date={props.data.date} /></li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
    </div>
  <div className="icon">
              <WeatherIcon code={props.data.icon} /></div>
              <p />
         <div className="temperatureData">   
    <ul>
      <li><span className= "temperature">🌡{Math.round(props.data.temperature)} </span>
    <span className="unit">ºC </span>
    </li>
      <li>💧{props.data.humidity}% </li>
      <li>🌬{Math.round(props.data.wind)}km/h</li>
    </ul>
</div>
</div>
  );
}