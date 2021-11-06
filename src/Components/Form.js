import React, { useState, useEffect } from "react";
import { Button, Paper, Input } from "@material-ui/core";
import { getWeatherData } from "../data/weatherapi";
import "../index.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

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

      {/* <Button type="submit" onClick={() => getData()} variant="contained">
        Search
      </Button> */}

      {weatherData !== null ? (
        <Paper elevation={3} variant="outlined" square>
          <h2>Live Weather</h2>
          {/* <h3>{weatherData.weather[0].description}</h3>
          <div class="icons">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="imgicon"
            />
          </div>
          <p>{weatherData.main.temp}°C</p>
          <h4>{weatherData.name}</h4> */}
        </Paper>
      ) : null}
    </>
  );
};

export default Form;
