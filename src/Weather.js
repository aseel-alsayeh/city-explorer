import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
               <h5>{this.props.date}</h5> 
                <h5>{this.props.description}</h5> 

            </div>
        )
    }
}

export default Weather
