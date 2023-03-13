import React from 'react';
import axios from 'axios';
import './App.css';
import Container from 'react-bootstrap/Container';
import CityForm from './components/CityForm';
import Weather from "./components/Weather";
import City from './components/City';
import Movie from './components/Movie';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cityNameInput : '',
      cityData : [],
      movieData : null,
      error: false,
      errorMessage: ''
    }
  }


  handleCityInput = (e) => {
    this.setState({
      cityNameInput : e.target.value
    })
  }

  handleSearch = async () => {

    // this.weatherSubmit()
    this.citySubmit()
    this.movieSubmit()

  }

  weatherSubmit = async () => {
    let url = `http://localhost:3001/weather?city=${this.state.cityNameInput}&format=json`
    try {
      let weatherData = await axios.get(url)
      this.setState({
        weatherData: weatherData.data
      })
      
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error
      })
    }
  }

  citySubmit = async () => {

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityNameInput}&format=json`;

    let cityData;

    try {
      cityData = await axios.get(url)
      
      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=12`
      this.setState({
        cityData : cityData.data[0],
        error: false,
        errorMessage: "",
        mapUrl : mapUrl
      })
    }
    catch(error) {
      this.setState({
        error: true,
        errorMessage: `${error.response.status} Error: City Not Found `
      })
    }
  }

  movieSubmit = async () => {

    let url = `http://localhost:3001/movies?city=${this.state.cityNameInput}&format=json`;
    
    try {
      let movieData = await axios.get(url);
      this.setState({
        movieData: movieData.data
      })

    }
    catch(error){
      this.setState({
        error: true,
        errorMessage: error
      });
    };
  }
  
  render () {


    return (
      <>

      <Container>
        <CityForm handleCityInput={this.handleCityInput} citySubmit = {this.handleSearch} />
        <Weather errorMessage={this.state.errorMessage} data = {this.state.weatherData} />

        { this.state.cityData
        &&
        <>
          <City errorMessage={this.state.errorMessage} mapUrl={this.state.mapUrl}  data={this.state.cityData} />
        </>
        }  
        {
          this.state.movieData
            &&
            <>
            {this.state.movieData.map(movie => <Movie key={movie.id} movie={movie} />)}

            
            </>
        }    

     </Container>
    </>
    )
  }
}

export default App;
