import React,{useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview.js"
import "./WeatherForecast.css"


export default function WeatherForecast(props){
  const[loaded, setLoaded]=useState(false);
  const[forecast,setForecast]=useState(null);
  
  useEffect(()=> {
    setLoaded(false);
  },[props.coordinates]);

  function handleForecastResponse(response){
  setForecast(response.data.daily);
    setLoaded(true);
}

function load(){
  let apiKey=`377b65e5ab39dbbbf56ae5019ed7e717`;
let longitude=props.coordinates.lon;
let latitude=props.coordinates.lat;
let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForecastResponse);
}

if (loaded){
  return (
    <div className="WeatherForecast row">
      {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="WeatherForecastPreview col" key={index}>
                  <WeatherForecastPreview data={dailyForecast} />
                </div>
              );
            }else {return null;}
          })}
        </div>
    );
} else{
load();

return null;
}}