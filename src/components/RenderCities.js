import React from 'react';
import PropTypes from 'prop-types';

import City from './City';

const RenderCities = (props) => {
  const cityList = props.cities.slice().reverse();
  return (
    <div className='city-list'>
      {cityList
        .map(city =>
          <City
            key={city}
            city={city}
            removeCity={props.removeCity}
            findCityWeather={props.findCityWeather}
          />)}
    </div>
  );
};

RenderCities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  findCityWeather: PropTypes.func.isRequired
};

export default RenderCities;
