import React, { useState, useEffect, useRef } from "react";
import Location from "./Location";
import "../index.css";
import axios from "axios";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const location = useRef();

  // https://api.openweathermap.org/data/2.5/weather?q=&units=metric&appid=108dd9a67c96f23039937fe6f3c91963

  const API_KEY = `108dd9a67c96f23039937fe6f3c91963`;
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`;

  const URL = `${BASE_URL}q=${inputValue}&units=metric&appid=${API_KEY}`;

  // function to get data
  const getData = async () => {
    if (inputValue != "") {
      const { data } = await axios.get(URL);
      setWeatherData(data);
    }
  };

  // data will be fetched on page load
  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    console.log(inputValue);
    getData();
  }, [inputValue]);

  return (
    <>
      <div className="search_box">
        <input
          type="text"
          className="search_bar"
          placeholder="Enter Location..."
          ref={location}
        />
        <button
          className="search_btn"
          type="submit"
          onClick={() => {
            setInputValue(location.current.value);
          }}
        >
          <i class="fas fa-search-location"></i>
        </button>
      </div>

      {!inputValue ? (
        <h3>Enter city name to know Weather.</h3>
      ) : weatherData ? (
        <Location
          city={weatherData.name}
          country={weatherData.sys.country}
          temp={weatherData.main.temp}
          icon={weatherData.weather[0].icon}
          weather={weatherData.weather[0].description}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Form;
