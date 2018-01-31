import React, { Component } from 'react';
import styled from  'styled-components';
import axios  from 'axios';

import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer'

import imageUrl from './ImageURL';

const AppContainer = styled.div`
  background-image: url(${props => props.background});
  min-height: 100vh;
  background-size: cover;
`


class App extends Component {

  state = {
    weatherData: null
  }

  componentDidMount () {
    axios.get('https://freegeoip.net/json/')
      .then(response => {
        let coordinates =  {
          latitude: response.data.latitude,
          longitude: response.data.longitude
        }
        let weatherAPIKey = "a85838678a70f528a5a7e69c73908506"
        let weatherURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
        let url =  weatherURL + weatherAPIKey + "/" + coordinates.latitude + "," + coordinates.longitude + "?units=si"

        setTimeout(function() {
          return 2
        }, 5000)
        return axios.get(url)
      })
      .then(response => {
        console.log("response", response)
        //console.log(response.data); THIS RESPONSE CHANGED COZ OF SPLICE BEING USED IN WEATHER.JS weekContent varaible.WEIRD
        this.setState({weatherData: response.data});
      })
  }
 
  render() {
    
    console.log("state",  this.state)
    return (
      <AppContainer background={this.state.weatherData ? imageUrl[this.state.weatherData.currently.icon] : imageUrl['wind']}>
        <Header></Header>
        <Weather weatherData={this.state.weatherData}></Weather>
        <Footer></Footer>
      </AppContainer>
    );
  }
}

export default App;
