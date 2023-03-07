import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CityForm extends React.Component {
    


    handleInput = (e)=> {
        e.preventDefault()

  
        this.props.citySubmit()
    }

    render () {


        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" id='form'>
              <Form.Label>Choose a city</Form.Label>
              <Form.Control  type="text" name="city" placeholder="Enter city" />
            </Form.Group>
            <Button onClick={this.handleInput} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )
    }
}

export default CityForm;