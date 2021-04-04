import React, { useState } from "react";
import './App.css';
import "./Themes.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherSearch from "./WeatherSearch";
import Credits from "./Credits";

export default function App() {
  const [theme, setTheme]=useState("dark");


function changeMode(){
  if (theme==="dark"){setTheme("light")} else{
  setTheme("dark");}
}
  
  return(
    <div className="fullContainer">
    <div className="header">
    <label class="switch">
  <input type="checkbox" onChange={changeMode} />
  <span class="slider round" />
</label> </div>
    <div className="container">
    <div className={`App ${theme}`}>
      <p/> <p/> <br />
      <WeatherSearch defaultCity= "Braga"/>
    </div>
  
  <Credits />
  </div>;
  </div>)
 
}

 

