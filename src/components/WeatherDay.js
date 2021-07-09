import React, { Component } from 'react'


class WeatherDay extends Component {
    render() {
        return (
            <div>

                {<h1>
                    Wether section:
                </h1>
                }


{
    this.props.weatherData.map(d=>{
      return ( <h5>{d.description} {d.date}</h5>)
              
    })
}



</div>
         ) }
}

export default WeatherDay
