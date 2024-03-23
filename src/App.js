import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reset.css'
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
// import Clothes from './component/Clothes';

// 1. 앱이 시작되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보이는 도시, 섭씨, 화씨, 날씨 상태가 들어간다.
// 3. 5개의 버튼이 있다.(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때 마다 도시별 날씨가 나온다
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

function App() {
  const [weather, setWeather] = useState(null); 
  const [city, setCity] = useState("");
  const cityArr = ['melbourne', 'reykjavik', 'bangkok', 'honolulu']; 

  // 앱이 시작되자마자 현재 위치 기반의 날씨가 보인다.
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude; // 위도
      let longitude = position.coords.longitude; // 경도
      
      getWeatherByCurrentLocation(latitude, longitude);
    }
  )}

  // api 이용해서 현재 위치 날씨 가져오기
  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    const CURRENT_LOCATION_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7f1c24e413ef06155681e9d55bfcaead&units=metric`;
    let response = await fetch(CURRENT_LOCATION_API_URL);
    let data = await response.json();
    setWeather(data);
    console.log(data)
  }

  // api 이용해서 도시 날씨 가져오기
  const getWeatherByCityName = async (city) => {
    const CITY_APP_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f1c24e413ef06155681e9d55bfcaead&units=metric`
    let response = await fetch(CITY_APP_URL);
    let data = await response.json();
    setWeather(data);
  }

  useEffect(() => { 
    city === '' ? getCurrentLocation() : getWeatherByCityName(city);    
  },[city]);

  return (
    <section class="wrapper">
      <div className='container'>
      <WeatherBox city={city} weather={weather} />
      {/* 아직 미완성 ㅠㅠ */}
      {/* <Clothes city={city} temp={Math.round(weather?.main?.temp)} /> */}
      <div className="buttonBox">
          <WeatherButton cityArr={cityArr} setCity={setCity}>{city}</WeatherButton>
      </div>
      </div>
    </section>
  );
}

export default App;
