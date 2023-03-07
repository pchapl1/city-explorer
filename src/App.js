import React from 'react';
import axios from 'axios';
import './App.css';
import Container from 'react-bootstrap/Container';
import CityForm from './components/CityForm';
import City from './components/City';

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
  //   let petData = await axios.get(`${process.env.REACT_APP_SERVER}/pet?species=${this.state.species}`)
  //   this.setState({
  //     petData : petData.data,
  //     showPet : true
  //   })

  handleCityInput = (e) => {
    this.setState({
      cityNameInput : e.target.value
    })
  }

  citySubmit = async () => {

    let url = `https://us1.locationiq.com/v1/search?key=pk.${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityNameInput}&format=json`;

    let cityData;

    try {
      cityData = await axios.get(url)
      
      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=pk.${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=12`
      this.setState({
        cityData : cityData.data[0],
        error: false,
        errorMessage: "",
        mapUrl : mapUrl
      })
    }
    catch(error) {
      console.log('error: ', error)
      this.setState({
        error: true,
        errorMessage: `${error.response.status} Error: City Not Found `
      })
    }
  }

  
  render () {

    return (
      <Container>
        <CityForm handleCityInput={this.handleCityInput} citySubmit = {this.citySubmit} />
        <City errorMessage={this.state.errorMessage} mapUrl={this.state.mapUrl}  data={this.state.cityData} />
    </Container>

    )
  }
}

export default App;
