import React, { Component } from 'react';

class NewSighting extends Component {
  render() {
    return (
      <div className='row'>
        <form className='col-md-3 m-4'>
          <h3>Record Your Butterfly Sighting!</h3>
          <div className='form-group'>
            <label htmlFor="search">Search for your butterfly</label>
            <select className='form-control' type="text" />
          </div>
          <div className='formgroup'>
            <label htmlFor="date">Date spotted</label>
            <input className='form-control' type="date"/>
          </div>
          <div className='formgroup'>
            <label htmlFor="location">Where did you see it?</label>
            <input className='form-control' type="text"/>
          </div>
          <div className='formgroup'>
            <label htmlFor="notes">Notes</label>
            <textarea rows='3' className='form-control' type="text"/>
          </div>
          <div className='formgroup'>
            <label htmlFor="seen by">Your name (or alias)</label>
            <input className='form-control' type="text"/>
          </div>
          <div className='formgroup'>
            <label htmlFor="photo">Photo URL</label>
            <input className='form-control' type="text"/>
          </div>
          <button className='btn btn-success mt-2'>Submit!</button>
        </form>
        <h3 className='col m-4'>Sightings</h3>
      </div>
    );
  }
}

export default NewSighting;