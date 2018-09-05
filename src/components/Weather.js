import React, { Component } from 'react';

 const Weather = (props) => {
  return (
    <div>
        { props.city && props.country && <p> Location: { props.city},{props.country} </p>}
        { props.city &&  <p>Temperature: { props.temperature}</p> }
        { props.humidity  && <p>Humidity: { props.humidity}</p> }
        { props.city   && <p>Conditions: { props.description}</p> }
        { props.error  && <p>{ props.error}</p> }
    </div>
  )
}

export default Weather;
