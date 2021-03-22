import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <p/> <p/> <br />
      <WeatherSearch defaultCity= "Braga"/>
      
  <p className="credits">
  <a className="footer" href="https://github.com/ana-barreira/react-weather-app" target="_blank" rel="noreferrer" >Open-source code </a> by <a href="https://www.linkedin.com/in/ana-barreira-7529b3183/" target="_blank" rel="noreferrer">Ana Barreira </a>
 </p>  <p/> <p/> <br />
    </div>
  );}

