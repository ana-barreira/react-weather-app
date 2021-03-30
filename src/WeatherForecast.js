import React,{useState} from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview.js"
import "./WeatherForecast.css"


export default function WeatherForecast(props){
  const[loaded, setLoaded]=useState(false);
  const[forecast,setForecast]=useState(null);
  
  function handleForecastResponse(response){
  setForecast(response.data);
    setLoaded(true);
}
if (loaded && props.city === forecast.city.name){
  return (
    <div className="WeatherForecast row">
      {forecast.list.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="WeatherForecastPreview col" key={index}>
                  <WeatherForecastPreview data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
    );
} else{
let apiKey=`377b65e5ab39dbbbf56ae5019ed7e717`;
let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForecastResponse);

return null;
}}