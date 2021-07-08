import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import axios from 'axios'
import Weather from './Weather'
import Movies from './Movies'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      longitude: '',
      latitude: '',
      error:'',
      weatherData:[],
      moviesData:[],

    }
  }


  inputChange = (event) => {
    this.setState({
      displayName: event.target.value
    })
  }

  clickMe = async (event) => {
    event.preventDefault();
    
    let axiosResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.d4d33965e53e9039815074b0322a83e1&q=${this.state.displayName}&format=json`)
    
    
    console.log('hello')
    this.setState({
      
      longitude: Number(axiosResponse.data[0].lon),
      latitude: Number(axiosResponse.data[0].lat),
      searchQuery:axiosResponse.data[0].searchQuery,
      
    })
    
    
    
    
    let axiosLocalApi= await axios.get(`http://localhost:8080/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&searchQuery=${this.state.displayName}`)
    this.setState({
      
      weatherData:axiosLocalApi.data,
      // longitude: Number(axiosLocalApi.data[0].lon),
      // latitude: Number(axiosLocalApi.data[0].lat),
      longitude: Number(axiosResponse.data[0].lon),
      latitude: Number(axiosResponse.data[0].lat),
  

    })
    console.log(axiosLocalApi.data[0])
    console.log(axiosLocalApi.data[0])
    console.log(this.state.longitude,this.state.latitude)

    // let axiosMovieResponse= await axios.get(`http://localhost:8080/movies?searchQuery=${this.state.displayName}`)
    let axiosMovieResponse= await axios.get(`http://localhost:8080/movies?city_name=${this.state.displayName}`)

    this.setState({
      moviesData:axiosMovieResponse.data
    })
    console.log(axiosMovieResponse.data[0])
  }
  


  
  render() {
    return (
      <>
        <form>
          <legend>Insert a City Name</legend>
          <input type="text" placeholder="city name" onChange={(event) => { this.inputChange(event) }} />
          <button onClick={this.clickMe}> Explore </button>
        </form>
      
        <Card style={{ width: '18rem' }}
        >
          <Card.Body>
            <Card.Title> longitude :</Card.Title>
            <Card.Text>
              {this.state.longitude}
            </Card.Text>
          </Card.Body>
        </Card> 
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>latitude : </Card.Title>
            <Card.Text>
              {this.state.latitude}
            </Card.Text>
          </Card.Body>
        </Card>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d4d33965e53e9039815074b0322a83e1&center=${this.state.latitude},${this.state.longitude}&zoom=10`} rounded="true"/>
           {<h1>
                    Wether section:
                </h1>
           }
        
        {
          this.state.weatherData.map(d=>{
            return < Weather description={d.description} date={d.date} />
          })
        }
           {<h1>
                    Movies section:
                </h1>
           }
        {
          this.state.moviesData.map(d=>{
            return <Movies title={d.title} votes={d.votes} image_url={d.image_url}/>
          })
        }

      </>
    )
  }

}
export default App


