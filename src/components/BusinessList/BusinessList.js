import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const BusinessList = (props) => {
    return (
        <div className="BusinessList">
            {
                props.businesses.map(business => {
                    return <Business key={business} business={business} />
                })
            }
        </div>
    );
}

export default BusinessList;