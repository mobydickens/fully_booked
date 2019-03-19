import React, { Component } from 'react';
import axios from 'axios';

class NewPhoto extends Component {
  state = {
    photo_url: ''
  }

  save = async () => {
    await axios.post('/newphoto', { photo_url: this.state.photo_url, sighting_id: this.props.sightingId } )
    this.setState({ photo: '' });
    this.props.hideFn();
  }

  render() {
    return (
      <div className='formgroup d-flex'>
        <input 
          className='form-control'
          placeholder='Photo URL' 
          value={ this.state.photo }
          type="text"
          onChange={(e)=>this.setState({ photo_url: e.target.value })}/>
        <button 
          className='btn btn-success'
          onClick={()=>this.save()}>Save
        </button>
      </div>
    );
  }
}

export default NewPhoto;