import React from "react";
import "./City.css";
class City extends React.Component {



    render () {
        return (
            <div className="city">
                {
                    this.props.errorMessage &&
                    <p>{this.props.errorMessage}</p>
                }
                <p>City: {this.props.data.display_name}</p>
                <p>latitude: {this.props.data.lat}</p>
                <p>longitude: {this.props.data.lon}</p>

                <img src={this.props.mapUrl} alt="" />
            </div>

        )
    }
}

export default City;