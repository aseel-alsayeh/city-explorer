import React, { Component } from 'react'
import Movie from './Movie'


export class Movies extends Component {
    render() {
        return (
            <div>
               <Movie  moviesData={this.props.moviesData}  />
 

            </div>
        )
    }
}

export default Movies