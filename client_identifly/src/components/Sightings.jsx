import React, { Component } from 'react';
import Header from './Header';
import NewSighting from './NewSighting';
import axios from 'axios';

class Sightings extends Component {

  state = {
    sightings: []
  }

  componentDidMount = async () => {
    let res = await axios.get('/sighting');
    this.setState({ sightings: res.data })
  }

  render() {
    let sightingsList = this.state.sightings.map(sighting => {
      return(
        <div className='border m-2 p-4' key={sighting.id}>
          <img className='img-fluid rounded' src={sighting.photo} alt="butterfly"/>
          <h3>{sighting.sighted_by}</h3>
          <p>Seen: {sighting.date_sighted}</p>
          <p>{sighting.location}</p>
          <p>{sighting.notes}</p>
        </div>
      )
    })
    return (
      <div>
        <Header />
        <div className='row m-3'>
          <NewSighting />
          <div>
            <h3 className='col m-4'>Sightings</h3>
            <div className='d-flex flex-wrap'>
              {sightingsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sightings;