import axios from 'axios';

import { SET_API_DATA, ADD_INITIAL_CITY_LIST, UPDATE_CITY_LIST, REMOVE_CITY, SET_ERROR_MESSAGE } from './actions';

export const updateCitiesList = (city) => {
  return {
    type: UPDATE_CITY_LIST,
    payload: city
  };
};

export const setAPIData = (apiData) => {
  return {
    type: SET_API_DATA,
    payload: apiData
  };
};

const setErrorMessage = () => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: true
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
      .then((response) => {
        console.log('reducer response: ', response);
        if (response.status === 200) {
          dispatch(setAPIData(response.data));

          if (response.data.name !== '') {
            dispatch(updateCitiesList(response.data.name));
          }
        }
      })
      .catch((error) => {
        console.log(error.response.status);
        dispatch(setErrorMessage());
      });
  };
};

export const removeCity = (city) => {
  return {
    type: REMOVE_CITY,
    payload: city
  };
};

export const addInitialCityList = (cityList) => {
  return {
    type: ADD_INITIAL_CITY_LIST,
    payload: cityList
  };
};

