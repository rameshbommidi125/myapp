import axios from 'axios'

import { useState } from 'react'
import './index.css'

import DetailsComponent from '../DetailsComponent'

const apiKey = '8298d9e78a0f5e56d73a5da934b30e27';

function SearchAndInputComponent() {

  const [cityName, setCityname] = useState('') 
  const [weatherData, setWeatherData] = useState({})
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [darkMode, setDarkMode] = useState(false);


  const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        const data = response.data;

        const location = data.name;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const dateAndTime = new Date(data.dt * 1000).toLocaleString();

        setWeatherData({
          location,
          temperature,
          humidity,
          dateAndTime
        });
        setIsDataFetched(true)
    } catch (error) {
        if (error.response && error.response.status === 404) {
            alert('City not found');
        } else {
            console.log('Error:', error.message);
        }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };



  return (
     <div className={`${ darkMode ? 'dark-mode': ''} container`}>
      <h1>Weather App</h1>
     <div>
        <input placeholder='Enter a city name or ZIP code' type='search' onChange={(e) => setCityname(e.target.value)} />
        <button onClick={() => getWeatherData()}>Search</button>
     </div>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    {
      isDataFetched ? (
        <DetailsComponent weatherData={ weatherData} />
      ): ''
    }
    </div>
  );
}

export default SearchAndInputComponent;