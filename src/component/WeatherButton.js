import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cityArr, setCity}) => {
  return (
    <>
      <Button variant="outline-warning">Current Location</Button>
      {cityArr.map((item, index) => (
        <Button variant="outline-warning" key={index} onClick={() => setCity(item)}>{item}</Button>
      ))}
    </>
  )
}

export default WeatherButton