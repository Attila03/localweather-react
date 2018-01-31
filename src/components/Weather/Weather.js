import React, { Component } from 'react';
import styled from 'styled-components';

import WeekDay from './WeekDay';
import Tab from '../Tabs/Tab';
import TabItem from '../Tabs/TabItem';
import TabContent from '../Tabs/TabContent'

const WeatherContainer = styled.div`
  margin: 60px auto 81px;
  width: 50%;

  @media (max-width: 768px) {
    width: 70%
  }

  .temp {
    display: inline-block;
  }

  .temp_btn {
    border: 2px solid crimson;
    border-radius: 5px;
    margin-left: 12px;
    padding: 4px 8px;
    background: white;
  }

  .todayTabContent {
    background: rgba(255,255,255, 0.7);
    padding: 30px;
    min-height: 280px;
  }

  .todayTabContent p {
    margin-top: 0;
  }

  .todayTabContent .date, .todayTabContent .time {
    text-align: right;
  }

  .weektabcontent {
    min-height: 280px;
  }
  
`


class Weather extends Component {

  state = {
    temperature_units: 'C'
  }

  convertTemperature = () => {
    if (this.state.temperature_units === 'C') {
      this.setState({temperature_units: 'F'})
    } else {
      this.setState({temperature_units: 'C'})
    }
  }

  render () {

    // console.log(this.state)
    // console.log(this.props)
    let todayTabContent = null;
    let WeekTabContent = null;

    if (this.props.weatherData){

      let currentTime = new Date(this.props.weatherData.currently.time*1000)

      let temperature = this.state.temperature_units === 'C'
                      ? this.props.weatherData.currently.temperature
                      : Math.round(((this.props.weatherData.currently.temperature*9/5) + 32)*100)/100;
      
      todayTabContent = (
        <div className='todayTabContent'>
          <p className='date'>Date: {currentTime.toString().slice(0,16)}</p>
          <p className='time'>Time: {currentTime.toString().slice(16, 25)}</p>
          <div>
            <p className='temp'>Temperature: {temperature} &deg; </p>
            <button 
              className='temp_btn' 
              title='Toggle Celsius/Fahrenheit' 
              onClick={this.convertTemperature}>
                {this.state.temperature_units}
            </button>
          </div>
          
          <p>Summary : {this.props.weatherData.currently.summary}</p>
          <p>Pressure : {this.props.weatherData.currently.pressure} millibars</p>
          <p>Humidity : {this.props.weatherData.currently.humidity}</p>
          <p>TimeZone : {this.props.weatherData.timezone}</p>
        </div>
      )

      let currentDay = new Date(this.props.weatherData.daily.data["0"].time*1000).getDay()

      const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

      let temp = [...week]

      let weekOrder = temp.splice(currentDay, ).concat(temp.splice(0, currentDay))

      let weekTabs = weekOrder.map(day => {
        return (
          <TabItem tabname={day} title={day} key={day}>{day.slice(0,1).toUpperCase()}</TabItem>
        )
      })

      // USING SPLICE INSTEAD OF SLICE WAS SOMEHOW CHANGING THE AXIOS RESPONSE LOGGED INTO THE CONSOLE

      let weekContent = this.props.weatherData.daily.data.slice(0, 7).map((dayData, index) => {
        return (
          <TabContent tabname={weekOrder[index]} key={weekOrder[index]}>
            <WeekDay weatherData={dayData}></WeekDay>
          </TabContent>
        )
      })

      let buffer = [...weekTabs, ...weekContent]

      WeekTabContent = (
        <div className='weektabcontent'>
          <Tab activeTabName={weekOrder[0]}>
            {buffer}
          </Tab>
        </div>
      )

    }

    console.log(this.props)

    return (  
      <h1>HELLO</h1>
      // <WeatherContainer>
      //     <Tab activeTabName='today'>
      //       <TabItem tabname='today'>Today</TabItem>
      //       <TabItem tabname='weekly'>Over The Week</TabItem>
      //       <TabContent tabname='today'>{todayTabContent}</TabContent>
      //       <TabContent tabname='weekly'>{WeekTabContent}</TabContent>
      //     </Tab>
      // </WeatherContainer>
    )
  }
  
}

export default Weather;