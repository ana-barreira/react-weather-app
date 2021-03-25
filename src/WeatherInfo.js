import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
  return (
  <div className="WeatherInfo">
  <h1>{props.data.city}</h1>
  <div className="description">
    <ul>
      <li> <FormattedDate date={props.data.date} /></li>
    </ul>
    </div>
  <div className="icon">
              <WeatherIcon code={props.data.icon} /></div>
              <p />
         <div className="temperatureData">   
    <ul>
      <li className="text-capitalize">{props.data.description}</li>
       <WeatherTemperature celsius={props.data.temperature} />
     </ul>
      <div className= "HumWinData">
      <span>Humidity: {props.data.humidity}% || </span>
      <span>Wind: {Math.round(props.data.wind)}km/h</span>
      <p />
      </div>
</div>
</div>
  );
}