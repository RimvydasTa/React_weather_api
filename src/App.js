

import React, { Component } from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';

const API_KEY = '6d6c91b17ff5314e732a3cb9121552d9';
class App extends Component {
  state = {
  
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log('data', data);
      if(city && country){
        this.setState({
          temperature : data.main.temp,
          city : data.name,
          country : data.sys.country,
          humidity : data.main.humidity,
          description : data.weather[0].description,
          error : ""
        }
      );
    }else {
        this.setState(
          {
            temperature : undefined,
            city : undefined,
            country : undefined,
            humidity : undefined,
            description : undefined,
            error : "Error location doesn't exist"
          }
      );
    }

    
  };
  render() {
    return (
      <div>
      <Titles />
      <Form  getWeather={this.getWeather}/>
      <Weather 
        temperature ={this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
      />
      </div>
    )
  }
};

export default App;
