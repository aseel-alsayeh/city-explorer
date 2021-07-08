import React, { Component } from 'react'

export class Movies extends Component {
    render() {
        return (
            <div>
               <h5>Movie title:   {this.props.title}</h5> 
               <h5>Movie votes:   {this.props.votes}</h5>
               <h5>Movie image:</h5>   <img src= {this.props.image_url} />
 

            </div>
        )
    }
}

export default Movies