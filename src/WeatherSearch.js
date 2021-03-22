import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactLoader from "./ReactLoader";

export default function WeatherSearch(props) {

  const [WeatherData, setWeatherData]=useState({ready:false});
  
  function handleResponse(response){
 setWeatherData({
   ready:true,
   temperature:response.data.main.temp,
   humidity: response.data.main.humidity,
   date:"Monday 19:27",
   description: response.data.weather[0].description,
   iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
   wind:response.data.wind.speed,
   city:response.data.name
 });}

 if (WeatherData.ready){
 return(
   <div className="Search">
    <form className="SearchEngine">
      <input
        type="Search"
        placeholder="Enter a city..."
        autoFocus= "on"/>
      <input type="Submit" defaultValue="Search" />   {""}
      <input type ="Submit" defaultValue=  "📍" />
    </form>
    <p />
    <h1>{WeatherData.city}</h1>
    <ul>
      <li>{WeatherData.date}</li>
      <li className="text-capitalize">{WeatherData.description}</li>
    </ul>
  <div className="data">
    <img src={WeatherData.iconUrl} alt ={WeatherData.description}  />
    <span className= "temperature">🌡 {Math.round(WeatherData.temperature)} </span>
    <span className="unit">ºC</span>
  </div>
  <p />
  <div className="data">
    <ul>
      <li>💧 {WeatherData.humidity} %</li>
      <li>🌬 {Math.round(WeatherData.wind)} km/h</li>
    </ul>
  </div>
  </div>
  );

 }else{
  
    let apiKey = `377b65e5ab39dbbbf56ae5019ed7e717`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  
  return <ReactLoader />;
  }}