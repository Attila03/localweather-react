import React from 'react';

import styled from 'styled-components';


const WeekDayContainer = styled.div`
  padding: 30px;
  background: rgba(255,255,255, 0.7);
  min-height: 230px;
  .date {
    text-align: right;
  }

  @media (max-width: 768px) {
    .date {
      text-align: center;
    }
  }
`

const weekday = (props) => {

  let date = new Date(props.weatherData.time*1000).toString().slice(0,16);

  return (
      <WeekDayContainer>
        <p className='date'>Date: {date}</p>
        <p>Summary: {props.weatherData.summary}</p>
        <p>Average Pressure: {props.weatherData.pressure} millibars.</p>
        <p>Average Humidity : {props.weatherData.humidity}</p>
      </WeekDayContainer>
  )
}


export default weekday;