import React, { useState } from 'react';
import DisplayWeather from './DisplayWeather';
import styled from 'styled-components';


const WeatherContainer = styled.div`
   flex: flex-end;
   padding: 0 0 1rem .8rem;

   @media screen and (max-width: 768px) {
      padding: 0 0 1rem 0;
   }
`;

const SmallHeader = styled.span`
   letter-spacing: .1rem;
   font-size: .8rem;
   
`;

const Form = styled.form`
   margin: 0.5rem 0 .5rem 0;
`;

const InputCity = styled.input`
   padding: .3rem .3rem;
   margin: 0 .5rem 0 0;
   text-decoration: none;
   border: none;
   border-radius: 4px;
   font-family: 'Montserrat', sans-serif;
   letter-spacing: 0.1rem;
   outline: none;
   background-color: lightgrey;

   &:focus {
      background-color: #fff;
   }
`;

const SearchBtn = styled.button`
   background: #E9B872;
   padding: .3rem .3rem;
   border-radius: 4px;
   text-decoration: none;
   border: none;
   font-size: .8rem;
   letter-spacing: 0.1rem;
   font-weight: bold;
   transition: ease-in-out .3s;
   outline: none;
   cursor: pointer;

   &:hover {
      transform: scale(1.05)
   }
`;

const Weather = () => {

   const API_KEY = '773313d0b8e2ac2660ab4cc78516cd91';

   const [form, setForm] = useState({
      city: "",
   });

   const [weather, setWeather] = useState([]);

   async function weatherData(e) {

      e.preventDefault();

      if (form.city === '') {
         alert('ADD values');
      } else {
         const data = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${API_KEY}`
         )
            .then((res) => res.json())
            .then(data => data);
         setWeather({ data: data });
         console.log(data);
      };
   };

   const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      if (name === 'city') {
         setForm({ ...form, city: value });
      }
   };

   return (

      <WeatherContainer data-aos='fade-left' data-aos-duration='2500' data-aos-anchor-placement='top-bottom' data-aos-delay='1500'>
         <SmallHeader>
            Want to know the weather?
         </SmallHeader>
         <Form>
            <InputCity type='text' name='city' placeholder='city here...' onChange={e => handleChange(e)} />
            <SearchBtn
               onClick={(e) => weatherData(e)}>
               Search
            </SearchBtn>
         </Form>
         {weather.data !== undefined ? (
            <div>
               <DisplayWeather data={weather.data} />
            </div>
         ) : null}
      </WeatherContainer>
   );
};

export default Weather;
