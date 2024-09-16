import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherArray, setWeatherArray] = useState({});

  let apiKey = "36f2f922d3084a489ca238c595dd947e";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    const weatherAPI = async () => {
      let response = await fetch(url);
      let jsonData = await response.json();
      // console.log(jsonData.main.temp);
      setWeatherArray([jsonData]);
    };
    weatherAPI();
  }, [city]);

  console.log(weatherArray);

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <input type="text" value={city} onChange={onChangeCity} />
      <p>{city}</p>
      {weatherArray.length > 0 &&
        weatherArray.map((data) => {
          return (
            <div>
              {/* {data.cod === 400 && <p>{data.cod}</p>} */}
              <p>{data.cod}</p>
            </div>
          );
        })}
    </div>
  );
}
