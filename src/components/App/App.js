import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import React, { Component } from 'react';
import { Yelp } from '../../util/yelp';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp = async (term, location, sortBy) => {
    let retrievedData = await Yelp.search(term, location, sortBy);
    this.setState({
      businesses: retrievedData
    })
  }

  render() {
    return (
      <div className="App">
        <h1>YelpApp-Demo</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
