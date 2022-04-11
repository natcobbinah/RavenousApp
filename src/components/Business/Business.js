import React from 'react';
import './Business.css';


const Business = (props) => {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={props.business.imageSrc} alt='business Image' />
                </div>
                <h2>{props.business.name}</h2>
                <div className="Business-information">
                    <div class="Business-address">
                        <p>{props.business.address}</p>
                        <p>{props.business.city}</p>
                        <p>{props.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{props.business.category}</h3>
                        <h3 className="rating">{props.business.rating}</h3>
                        <p>{props.business.reviewCount}</p>
                    </div>
                </div>
            </div>
        );
}

export default Business;