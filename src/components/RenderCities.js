import React from 'react';

import City from './City';

const RenderCities = (props) => {
  const citiesList = props.cities.slice().reverse();
  return (
    <div>
      {citiesList.map(city => <City key={city} city={city} removeCity={props.removeCity} />)}
    </div>
  );
}

export default RenderCities;