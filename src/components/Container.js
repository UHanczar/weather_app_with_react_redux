import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getAPIData, updateCitiesList } from './../actions/actionCreators';

class Container extends Component {
  constructor(props) {
    super(props);
    this.handleWeather = this.handleWeather.bind(this);
  }
  // getWeather() {
  //   // axios.get('http://freegeoip.net/json/').then(data => console.log(data.json()));
  //   const baseUrl = `http://api.openweathermap.org`;
  //   const path = `/data/2.5/weather`;
  //   const appId = `10398681c88c43794ad6ed5b9366ca29`;
  //   const query = `units=metric&lang=ru&appid=${appId}`;
  //   console.log(this.rootNode.value);
  //   const city = this.rootNode.value;    axios.get(`${baseUrl}${path}?q=${city}&${query}`).then(data => console.log(data));
  // }
  
  handleWeather(e) {
    // e.preventDefault();
    if (e.key === 'Enter') {
      const city = this.rootNode.value;
      this.props.getWeather(city);
    }
  }
  
  render() {
    return (
      <div>
        {/* <form onKeyPress={this.handleWeather}> */}
          <input type='text' placeholder='Find a city' ref={node => this.rootNode = node} onKeyPress={this.handleWeather} />
        {/* </form> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.getWeatherData,
    cities: state.getCitiesList
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWeather(val) {
    console.log(val);
    dispatch(getAPIData(val));
    // dispatch(updateCitiesList(val));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);