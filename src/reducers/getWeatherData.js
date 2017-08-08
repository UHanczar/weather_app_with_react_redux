import { SET_API_DATA, SET_ERROR_MESSAGE } from './../actions/actions';

const initialState = {
  data: {},
  isLoading: false,
  errorMessage: false
};

export const getWeatherData = (state = initialState, action) => {
  switch (action.type) {
    case SET_API_DATA:
      return Object.assign({}, state, { data: action.payload, isLoading: true, errorMessage: '' });
    case SET_ERROR_MESSAGE:
      return Object.assign({}, state, { data: {}, isLoading: false, errorMessage: action.payload });
    default:
      return state;
  }
};

