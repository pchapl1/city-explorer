import React from "react";
import "./CityForm.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CityForm extends React.Component {
    
    handleClick = (e)=> {
      e.preventDefault()
      let city = e.target.city.value
      this.props.citySubmit(city)
    }

    render () {


        return (
            <Form className="city-form"  onSubmit={this.handleClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail" id='form'>
              <Form.Label>Choose a city</Form.Label>
              <Form.Control onChange={this.props.handleCityInput} type="text" name="city" placeholder="Enter city" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
        )
    }
}

export default CityForm;