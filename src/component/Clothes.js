import React, { useEffect, useState } from 'react'

const CLOTHES_TEXT_BY_TEMPERATURE = {
  'temp_under4':'패딩, 두꺼운 코트, 목도리, 기모제품',
  'temp_5to8': '패딩, 두꺼운 코트, 목도리, 기모제품',
  'temp_9to11':'자켓, 트랜치 코트, 야상, 니트, 청바지, 스타킹',
  'temp_12to16':'자켓, 가디건, 야상, 스타킹, 청바지, 면바지',
  'temp_17to19': '얇은 니트, 맨투맨, 가디건, 청바지',
  'temp_20to22':'얇은 가디건, 긴팔, 면바지, 청바지',
  'temp_23to27': '반팔, 얇은 셔츠, 반바지, 면바지',
  'temp_over28':'민소매, 반팔, 반바지, 원피스',
}

const Clothes = ({city, temp}) => {
  const [clothText, setClothText] = useState('');

  // 왜 텍스트가 안나올까ㅠㅠㅠㅠ 
  const getClothesByTemperature = (temp) => {
    switch ({temp}) {
      case temp <= 4 : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_under4);
      break;
      case 5 <= temp <= 8 : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_5to8);
      break;
      case 9 <= temp <= 11 : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_9to11);
      break;
      case 12 <= temp <= 16 : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_12to16);
      break;
      case 17 <= temp <= 19 : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_17to19);
      break;
      case 20 <= temp <= 22 : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_20to22);
      break;
      case 23 <= temp <= 27 : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_23to27);
      break;
      case 28 >= temp : 
        setClothText(CLOTHES_TEXT_BY_TEMPERATURE.temp_over28);
      break;
      default:
        break;
    };  
  };
  
  useEffect(() => { 
    getClothesByTemperature(temp)
  },[city]);
  
  return (
    <p>이런 날씨엔 <em>{clothText}</em>을 입으세요😉</p>
  )
}

export default Clothes