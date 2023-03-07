import React from 'react';
import axios from 'axios';
import './App.css';
import CityForm from './components/CityForm';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cityNameInput : '',
      cityData : [],
      error: false,
      errorMessage: ''
    }
  }

  citySubmit = async (cityNameInput) => {

    // let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=seattle&format=json`;
    // let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${cityNameInput}&format=json`;
    
  //   let petData = await axios.get(`${process.env.REACT_APP_SERVER}/pet?species=${this.state.species}`)
  //   this.setState({
  //     petData : petData.data,
  //     showPet : true
  //   })
  //   let state;

  //   try {
  //     // state = await axios.get(url)
  //     this.setState({
  //       cityData : state.data[0],
  //       error: false,
  //       errorMessage: ""
  //     })
  //   }
  //   catch(error) {
  //     console.log('error: ', error)
  //     this.setState({
  //       error: true,
  //       errorMessage: `Error: ${error.response.status}`
  //     })
  //   }
  }

  
  render () {
    let cityName = this.state.cityData.display_name
    let lat = this.state.cityData.lat
    let long = this.state.cityData.long
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${lat},${long}&zoom=12`
    console.log(cityName)
    return (
      <>
      <CityForm citySubmit = {this.citySubmit} />
      </>
    )
  }
}

export default App;
