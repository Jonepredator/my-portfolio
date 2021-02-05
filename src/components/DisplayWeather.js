import React from 'react';
import styled from 'styled-components';

const MainCard = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 4px;
   padding: 5px;
`;

const CityInfo = styled.span`
   letter-spacing: 0.1rem;
   text-align: center;

   @media screen and (max-width: 768px) {
      text-align: left;
   }
`;

const WeatherInfo = styled.div`
   display: flex;
   letter-spacing: 0.1rem;
   justify-content: center;

   h3 {
      font-size: 1.2rem;
      font-weight: lighter;
      padding: 40px 0 0 0;
      text-align: center;
   }

   @media screen and (max-width: 768px) {
      justify-content: left;
   }
`;

const Image = styled.img`
   width: 100px;

`;

const WeatherDescription = styled.span`
   letter-spacing: 0.1rem;
   flex-direction: flex-end;
   text-align: center;

   @media screen and (max-width: 768px) {
      text-align: left;
   }
`;

function DisplayWeather(props) {
   const { data } = props;

   const ICON_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

   return (
      <MainCard>
         <CityInfo>
            {data.name}, {data.sys.country}.
         </CityInfo>
         <WeatherInfo>
            <h3>{Math.floor(data.main.temp - 273.15)}°</h3>
            <Image src={ICON_URL} alt='weather-icon' />
         </WeatherInfo>
         <WeatherDescription style={{ textTransform: 'capitalize' }}>{data.weather[0].description}</WeatherDescription>
      </MainCard>

   );
}

export default DisplayWeather;
