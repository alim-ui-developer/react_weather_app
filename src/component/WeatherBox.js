import React from 'react'

const WeatherBox = ({weather}) => {
  const temp = weather?.main?.temp;
  return (
    <div className='weatherBox'>
      <h2 className='title'>
        <em>{weather?.name}</em>
        <span>{weather?.sys?.country}</span>
      </h2>
      <p className='temp'>{Math.round(temp)}<sup>o</sup>C / {Math.round((temp * 1.8) + 32)}<sup>o</sup>F</p>
      <p className='description'>
        <i><img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="" /></i>
        {weather?.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox