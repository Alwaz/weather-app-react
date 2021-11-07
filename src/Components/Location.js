import React from "react";

const Location = ({ city, country, temp, icon, weather }) => {
  return (
    <>
      <div className="location_box">
        <div className="location">
          {city}, {country}
        </div>
      </div>

      <div className="weather_box">
        <div className="temp">{temp}°C</div>
        <div class="icons">
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="imgicon"
          />
        </div>
        <div className="weather">{weather}</div>
      </div>
    </>
  );
};

export default Location;
