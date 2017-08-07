const initialState = {
  data: ''
}

export const getWeatherData = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_API_DATA':
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
};

