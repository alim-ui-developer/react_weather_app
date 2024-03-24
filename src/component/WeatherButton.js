import React from 'react';
// import { Button } from 'react-bootstrap';

const WeatherButton = ({selectedCity, cityArr, setCity}) => {
  //const [isOn, setIsOn] = useState('');
  return (
    <>
      <button onClick={() => setCity('')} className='btn_currentLocation'>🌏 현재 나의 위치</button>
      {cityArr.map((item, index) => (
        <button 
          key={index}
          onClick={() => setCity(item)}
          className={`btn_${item} ${item === selectedCity && 'on'}`}>
          <span>{item}</span>
        </button>
      ))}
    </>
  )
}

export default WeatherButton