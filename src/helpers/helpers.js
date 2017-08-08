export const setCityList = (cities) => {
  if (Array.isArray(cities)) {
    localStorage.setItem('cityList', JSON.stringify(cities));
    return cities;
  }
};

export const getCityList = () => {
  const stringSities = localStorage.getItem('cityList');
  let cities = [];

  try {
    cities = JSON.parse(stringSities);
  } catch (e) {

  }

  return Array.isArray(cities) ? cities : [];
};