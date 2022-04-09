import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                      return  <Business key={business} business = { business }/>
                    })
                }
            </div>
        );
    }
}

export default BusinessList;