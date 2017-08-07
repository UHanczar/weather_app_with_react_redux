const initialState = {
  data: '',
  isLoading: false
}

export const getWeatherData = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_API_DATA':
      return Object.assign({}, state, { data: action.payload, isLoading: true });
    default:
      return state;
  }
};

