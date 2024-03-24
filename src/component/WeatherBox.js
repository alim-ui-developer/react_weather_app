

import React  from 'react'
import weatherDescKo from '../data/WeatherDescKo';
import { isoCountry } from 'iso-country-map';

const WeatherBox = ({city, weather}) => {
  const temp = weather?.main?.temp;

  return (
    <div className='weatherBox'>
      <h2 className='title'>
        <em>{weather?.name}</em>
        <span>{isoCountry(weather?.sys?.country, 'name')}</span>
      </h2>
      <p className='temp'>{Math.round(temp)}<sup>o</sup>C / {Math.round((temp * 1.8) + 32)}<sup>o</sup>F</p>
      <p className='description'>
        <i><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="" /></i>
        {/* {weather?.weather[0].description} */}
        {weatherDescKo[weather?.weather[0].id]}
      </p>
    </div>
  )
}

export default WeatherBox