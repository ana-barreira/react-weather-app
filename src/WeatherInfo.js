import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
  return (
  <div className="WeatherInfo">
  <h1>{props.data.city}</h1>
    <ul>
      <li> <FormattedDate date={props.data.date} /></li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
  <div className="data">
    <img src={props.data.iconUrl} alt ={props.data.description}  />
    <span className= "temperature">🌡 {Math.round(props.data.temperature)} </span>
    <span className="unit">ºC</span>
  </div>
  <p />
  <div className="data">
    <ul>
      <li>💧 {props.data.humidity} %</li>
      <li>🌬 {Math.round(props.data.wind)} km/h</li>
    </ul>
  </div>
</div>
  );
}