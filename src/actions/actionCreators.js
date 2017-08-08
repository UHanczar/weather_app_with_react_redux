import axios from 'axios';

export const updateCitiesList = (city) => {
  return {
    type: 'UPDATE_CITIES_LIST',
    payload: city
  };
};

export const setAPIData = (apiData) => {
  return {
    type: 'SET_API_DATA',
    payload: apiData
  };
};

export const getAPIData = (city) => {
  return (dispatch) => {
    const baseUrl = `http://api.openweathermap.org`;
    const path = `/data/2.5/weather`;
    const appId = `10398681c88c43794ad6ed5b9366ca29`;
    const query = `units=metric&lang=ru&appid=${appId}`;
    axios
      .get(`${baseUrl}${path}?q=${city}&${query}`)
      .then(response => {
        console.log(response);
        dispatch(setAPIData(response.data));
        dispatch(updateCitiesList(response.data.name));
      })
      .catch(error => console.log(error));
  };
};

export const removeCity = (city) => {
  return {
    type: 'REMOVE_CITY',
    payload: city
  };
};

export const addInitialCityList = (cityList) => {
  return {
    type: 'ADD_INITIAL_CITY_LIST',
    payload: cityList
  }
};

