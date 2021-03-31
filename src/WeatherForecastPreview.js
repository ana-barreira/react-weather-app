import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props){
  function day(){
    let date=new Date(props.data.dt*1000);
    let day=date.getDay();
     
    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    return days[day];
  }

  function maxtemperature(){
  return <small> <strong>{Math.round(props.data.temp.max)}º </strong></small>;}
  
  function mintemperature(){
    return <small>{Math.round(props.data.temp.min)}º</small>;
  }
  return(
     <div className=" WeatherForecastDay">
    {day()}
      <WeatherIcon code={props.data.weather[0].icon} />
    {maxtemperature ()} {mintemperature()}
  </div>);}