import React, { useState, useEffect } from "react";
import Location from "./Location";
import "../index.css";
import axios from "axios";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = `108dd9a67c96f23039937fe6f3c91963`;
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`;

  const URL = `${BASE_URL}q=${inputValue}&units=metric&appid=${API_KEY}`;

  const getValue = (e) => {
    setInputValue(e.target.value);
  };

  // function to get data
  const getData = async () => {
    const { data } = await axios.get(URL);
    setWeatherData(data);
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

      {!inputValue ? (
        ""
      ) : (
        <Location
          city={weatherData.name}
          country={weatherData.sys.country}
          temp={weatherData.main.temp}
          icon={weatherData.weather[0].icon}
          weather={weatherData.weather[0].description}
        />
      )}
    </>
  );
};

export default Form;
