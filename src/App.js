import "./App.css";
import "./index.css";
import Form from "./Components/Form";
import React, { useState } from "react";
import { getWeatherData } from "./data/weatherapi";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <>
      <div className="app">
        <main>
          <Form />
        </main>
      </div>
    </>
  );
}

export default App;
