import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Weather = (props) => {
  const api_key = process.env.REACT_APP_API_KEY.trim();

  const[weather, setWeather] = useState();

  //Formats for multiple word city names
  const capital = props.capital.replace(' ', ',');

  const weatherUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`;

  useEffect(() => {
    axios
      .get(weatherUrl)
      .then((response) =>{
        setWeather(response.data);
      })
  },[weatherUrl])

  if(weather === undefined){
    return <div>Loading Weather..</div>
  }
  if(weather.current === undefined){
    console.log(weather)
    console.log(weatherUrl)
    return <div>There was an issue with retreiving the weather. Try again later.</div>
  }


  return(
    <div>
      {console.log(weather)}
      <p>temperature: {weather.current.temperature} celcius</p>
      <img alt={weather.current.weather_descriptions[0]} src={weather.current.weather_icons[0]}></img>
      <p>wind: {weather.current.wind_speed} direction: {weather.current.wind_dir} </p>
    </div>
  )

}

export default Weather;