import React, { Component } from 'react';
import Header from './Header';
import NewSighting from './NewSighting';

class Sightings extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='m-3'>
          <NewSighting />
        </div>
      </div>
    );
  }
}

export default Sightings;