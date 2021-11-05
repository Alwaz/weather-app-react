import React, { useState, useEffect } from "react";
import { Button, Paper, Input } from "@material-ui/core";
import { getWeatherData } from "../data/weatherapi";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
    <div>
      <form onSubmit={onSubmit}>
        <Input
          value={inputValue}
          placeholder="Placeholder"
          onChange={getValue}
        />

        <Button
          type="submit"
          onSubmit={onSubmit}
          onClick={() => getData()}
          variant="contained"
        >
          Search
        </Button>
      </form>

      <Paper elevation={3} variant="outlined" square>
        <h2>Live Weather</h2>
        <h3>{weatherData.weather[0].description}</h3>
        <p>{weatherData.main.temp}°C</p>
        <h4>{weatherData.name}</h4>
      </Paper>
    </div>
  );
};

export default Form;
