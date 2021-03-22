import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherSearch from "./WeatherSearch";
import Credits from "./Credits";

export default function App() {
  return (
    <div className="container">
    <div className="App">
      <p/> <p/> <br />
      <WeatherSearch defaultCity= "Braga"/>
    </div>
  
  <Credits />
  </div>);
}

 

