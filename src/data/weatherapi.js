import axios from "axios";

export const getWeatherData = async (location) => {
  const API_KEY = "108dd9a67c96f23039937fe6f3c91963";

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
