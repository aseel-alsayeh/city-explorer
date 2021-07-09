import React, { Component } from 'react'

export class Movie extends Component {
    render() {
        return (
            <div>
           {    <h1>
                    Movies section:
                </h1>
           }

         {   
          this.props.moviesData.map(d=>{
            return (<h5> {this.props.title} {this.props.votes}  <img src= {this.props.image_url} /></h5> )
          
          })
          }
            </div>
        )
    }
}

export default Movie
