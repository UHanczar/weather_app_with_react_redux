import React from 'react';

const City = (props) => (
  <div className='city'>
    <div  className='city-link' onClick={() => props.findCityWeather(props.city)}>
      <div>{props.city}</div>
    </div>
    <div
      className='btn-remove'
      onClick={() => props.removeCity(props.city)}
    >+</div>
  </div>
);

export default City;
