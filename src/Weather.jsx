import React, { Component } from 'react';



class Weather extends Component {
  state = {
    isHot: true,
    wind: "breeze"
  }
  setWeather = () => {
    this.setState({isHot: !this.state.isHot})
    // console.log(this);
  }

  render() {
    return (
      <>
        <span onClick={() => this.setWeather()}>今天天氣很{this.state.isHot? "炎熱": "涼爽"}, {this.state.wind}</span>
      </>
    );
  }
}

export default Weather;
