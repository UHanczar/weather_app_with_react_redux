import React from 'react';

const City = (props) => (
  <div className='city'>
    <div>{props.city}</div>
    <button className='btn-remove' onClick={(city) => props.removeCity(props.city)}>Remove</button>
  </div>
);

export default City;