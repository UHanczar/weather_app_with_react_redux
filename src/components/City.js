import React from 'react';

const City = (props) => (
  <div className='city'>
    <div  onClick={() => props.findCityWeather(props.city)}>
      <div>{props.city}</div>
    </div>
    <button
      className='btn-remove'
      onClick={() => props.removeCity(props.city)}
    >Remove</button>
  </div>
);

export default City;
