import React, { useState, useEffect } from "react";
import Location from "./Location";
import { getWeatherData } from "../data/weatherapi";
import "../index.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("Karachi");
  const [weatherData, setWeatherData] = useState(null);

  const getValue = (e) => {
    setInputValue(e.target.value);
  };

  // function to get Data
  const getData = async () => {
    try {
      const data = await getWeatherData(inputValue);
      console.log(data);
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="search_box">
        <input
          value={inputValue}
          type="text"
          className="search_bar"
          placeholder="Enter Location..."
          onChange={getValue}
        />
        <button className="search_btn" type="submit" onClick={() => getData()}>
          <i class="fas fa-search-location"></i>
        </button>
      </div>

      <Location
        city={weatherData.name}
        country={weatherData.sys.country}
        temp={weatherData.main.temp}
        icon={weatherData.weather[0].icon}
        weather={weatherData.weather[0].description}
      />
    </>
  );
};

export default Form;
