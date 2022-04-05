import React, { Component } from 'react';
import './Business.css';


class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt='business Image' />
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div class="Business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating">{this.props.business.rating}</h3>
                        <p>{this.props.business.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;