import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {

    render () {
        if (this.props.data) {
            console.log('hello')
        }
        return (
            <>
                { this.props.data
                    &&
                    <>
                        <h3>Weather forecast</h3>
                        <ListGroup>
                        <ListGroup.Item>{this.props.data[0].date}: {this.props.data[0].description}</ListGroup.Item>
                        <ListGroup.Item>{this.props.data[1].date}: {this.props.data[1].description}</ListGroup.Item>
                        <ListGroup.Item>{this.props.data[2].date}: {this.props.data[2].description}</ListGroup.Item>
                        </ListGroup>
                    
                    </>
                }
                                {
                    this.props.errorMessage &&
                    <p>{this.props.errorMessage}</p>
                }
            </>

            )

    }
}

export default Weather;