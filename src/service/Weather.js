import React, { useState, useEffect } from 'react';

function Weather() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const api_key = 'a4ff709ff188018538ecb3e3dd4d39e3';
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTemperature(data.main.temp);
      });
  }, []);

  return (
    <div>
      <h1>Current Temperature:</h1>
      {temperature ? <p>{temperature}°C</p> : <p>Loading...</p>}
    </div>
  );
}

export default Weather;