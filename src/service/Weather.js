import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide/Slide';

function WeatherSlide() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const api_key = 'a4ff709ff188018538ecb3e3dd4d39e3';
    const city = 'Oujda';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTemperature(data.main.temp);
      });
  }, []);
 
  return (
    <Slide
      title={temperature + ' ºC'}
      desc={'Oujda'}
      img={'https://images.ctfassets.net/4ivszygz9914/2282b0b8-4bf4-4c3e-8606-e6a44b8afd5e/5f6eb05510ec1df10239d4db0bf1d0d3/9334400d-90eb-4fb0-9ada-06df9a08862a.jpeg?fm=webp'}
    />
  );
}

export default WeatherSlide;
