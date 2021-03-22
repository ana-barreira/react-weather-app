import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function showTemperature(response) {
    setCity(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `377b65e5ab39dbbbf56ae5019ed7e717`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="Search"
        placeholder="Enter a city..."
        autoFocus= "on"
        onChange={updateCity}

      />
      <input type="Submit" defaultValue="Search" />   {""}
      <input type ="Submit" defaultValue="Current" />
    </form>
  );
  if (temperature) {
    return (
      <div>
        {form}
        <p />
        <ul>
          <li> {Math.round(temperature)}ºC</li>
          <li> {(description).toUpperCase()} </li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)} km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
