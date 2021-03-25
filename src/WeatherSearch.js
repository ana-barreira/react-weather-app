import React, { useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReactLoader from "./ReactLoader";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherSearch(props) {

  const [WeatherData, setWeatherData]=useState({ready:false});
  const [city, setCity]=useState(props.defaultCity);
  function handleResponse(response){
 setWeatherData({
   ready:true,
   temperature:response.data.main.temp,
   humidity: response.data.main.humidity,
   date: new Date(response.data.dt*1000),
   description: response.data.weather[0].description,
   iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
   icon:response.data.weather[0].icon,
   wind:response.data.wind.speed,
   city:response.data.name
 });}

function search(){
let apiKey = `377b65e5ab39dbbbf56ae5019ed7e717`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
}

 function handleSubmit (event){
   event.preventDefault();
   search();
 }

 function handleCityChange(event){
setCity(event.target.value);
 }

 if (WeatherData.ready){
 return(
   <div className="Search">
    <form className="SearchEngine" onSubmit={handleSubmit}>
      <input
        type="Search"
        placeholder="Enter a city..."
        autoFocus= "on"
        onChange={handleCityChange} />
      <input type="Submit" defaultValue="Search" />   {""}
      <input type ="Submit" defaultValue=  "📍"/>
    </form>
    <p />
    <WeatherInfo data={WeatherData} />
    <WeatherForecast city={WeatherData.city} />
  </div>
  );

 }else{
  search();
  return <ReactLoader />;
  }}