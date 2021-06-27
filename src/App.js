import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      longitude: '',
      latitude: '',

    }
  }

  clickMe = async (event) => {
    event.preventDefault();
    let axiosResponse = await axios.get('https://eu1.locationiq.com/v1/search.php?key=pk.d4d33965e53e9039815074b0322a83e1&q=Amman&format=json')
    this.setState({
      longitude: axiosResponse.data[0].lon,

      latitude: axiosResponse.data[0].lat,

    })

  }
  inputChange = (event) => {
    this.setState({
      displayName: event.target.value
    })
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

      </>
    )
  }
}

export default App
