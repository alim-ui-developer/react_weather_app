import React, { useEffect, useState } from 'react'

const OOTD_BY_TEMPERATURE = {
  temp_under4: {
    type: 'temp_under4',
    text: '패딩, 두꺼운 코트, 기모 제품, 목도리'
  },
  temp_5to8: {
    type: 'temp_5to8',
    text: '코트, 가죽 자켓, 내복, 니트'
  },
  temp_9to11: {
    type: 'temp_9to11',
    text: '자켓, 트랜치 코트, 니트, 스타킹, 청바지'
  },
  temp_12to16: {
    type: 'temp_12to16',
    text: '자켓, 가디건, 스타킹, 청바지, 면바지'
  },
  temp_17to19: {
    type: 'temp_17to19', 
    text: '얇은 니트, 맨투맨, 가디건, 청바지'
  },
  temp_20to22: {
    type: 'temp_20to22',
    text: '얇은 가디건, 긴팔, 면바지, 청바지'
  },
  temp_23to27: {
    type: 'temp_23to27',
    text: '반팔, 얇은 셔츠, 반바지, 면바지'
  },
  temp_over28: {
    type: 'temp_over28',
    text: '민소매, 반팔, 반바지, 원피스'
  }
}

const OotdBox = ({temp}) => {
  const [ootdText, setOotdText] = useState('');
  const [ootdImage, setOotdImage] = useState('');
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const getClothesByTemperature = () => {
    if(temp <= 4){
      setOotdText(OOTD_BY_TEMPERATURE.temp_under4.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_under4.type);
      return;
    } else if (5 <= temp && temp <= 8) {
      setOotdText(OOTD_BY_TEMPERATURE.temp_5to8.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_5to8.type);
      return;
    } else if (9 <= temp && temp <= 11) {
      setOotdText(OOTD_BY_TEMPERATURE.temp_9to11.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_9to11.type);
      return;
    } else if (12 <= temp && temp <= 16) {
      setOotdText(OOTD_BY_TEMPERATURE.temp_12to16.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_12to16.type);
      return;
    } else if (17 <= temp && temp <= 19) {
      setOotdText(OOTD_BY_TEMPERATURE.temp_17to19.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_17to19.type);
      return;
    } else if (20 <= temp && temp <= 22) {
      setOotdText(OOTD_BY_TEMPERATURE.temp_20to22.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_20to22.type);
      return;
    } else if (23 <= temp && temp <= 27) {
      setOotdText(OOTD_BY_TEMPERATURE.temp_23to27.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_23to27.type);
      return;
    } else {
      setOotdText(OOTD_BY_TEMPERATURE.temp_over28.text);
      setOotdImage(OOTD_BY_TEMPERATURE.temp_over28.type);
      return;
    }
  };
  
  useEffect(() => { 
    getClothesByTemperature()
  },[temp]);
  
  return (
    <div className='ootdBox'>
      <div className={`ootdImage ${ootdImage}`}>&nbsp;</div>
      <p className="ootdText">이런 날씨엔 <em>{ootdText}</em>를 입어보세요😊</p>
      <a 
        href="https://www.musinsa.com/app/" 
        target='_blank' 
        className="btn_shopping" 
        rel="noreferrer"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        >
        {isMouseEnter ? '도와줘요 무신사!!!' : '입을 옷이 없다구요?'}
      </a>
    </div>
  )
}

export default OotdBox