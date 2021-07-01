import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import axios from 'axios'
import Weather from './Weather'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      longitude: '',
      latitude: '',
      error:'',
      weatherData:[]

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
    let axiosLocalApi= await axios.get(`http://localhost:8080/weather?lat=31.95&lon=35.91&searchQuery=amman`)
    
    console.log('hello')
    this.setState({
      
      longitude: axiosResponse.data[0].lon,
      latitude: axiosResponse.data[0].lat,
      searchQuery:axiosResponse.data[0].searchQuery,
      weatherData:axiosLocalApi.data
      
    })
    console.log(axiosLocalApi.data , typeof axiosLocalApi.data )
    console.log(this.state.latitude)
    console.log('axiosR',axiosResponse.data[0].lat)



  }
  


  
  render() {
    return (
      <>
        <form>
          <legend>Insert a City Name</legend>
          <input type="text" placeholder="city name" onChange={(event) => { this.inputChange(event) }} />
          <button onClick={this.clickMe}> Explore </button>
        </form>
        {/* <p> longitude : {this.state.longitude}</p> */}
        {/* <p> latitude : {this.state.latitude}</p> */}
        {console.log(this.state.displayName)}
      
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
        {
          this.state.weatherData.map(d=>{
            return < Weather description={d.description} date={d.date} />
          })
        }


      </>
    )
  }

}
export default App


