import React from "react";
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {

    render () {
        console.log(this.props.movie)
        return (
            
            <Card style={{ width: '18rem' }}>
            { this.props.movie.poster_path
                &&
                <Card.Img variant="top" src={this.props.movie.poster_path} />
            }
            <Card.Body>
              <Card.Title>{this.props.movie.title}</Card.Title>
              <Card.Text>
                {this.props.movie.overview}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default Movie;