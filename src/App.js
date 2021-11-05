import './App.css';
import Form from './Components/Form';
import React,{useState} from 'react';
import { getWeatherData } from './data/weatherapi'

function App() {
  const[weatherData,setWeatherData]=useState(null);

  return (
    <>
    <div className="App">
       <h1>Weather app</h1>
       <Form/>
    </div>
    </>
  );
}

export default App;
