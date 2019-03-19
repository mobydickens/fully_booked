import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewSighting extends Component {

  state = {
    butterfly_id: '',
    date_sighted: '',
    location: '',
    notes: '',
    sighted_by: '',
    photo: ''
  }

  submitSighting = async () => {
    let { butterfly_id, date_sighted, location, notes, sighted_by } = this.state;
    await axios.post('/newsighting', { butterfly_id, date_sighted, location, notes, sighted_by });
    this.setState({
      butterfly_id: '',
      date_sighted: '',
      location: '',
      notes: '',
      sighted_by: ''
    })
    this.props.refreshSightings();
  }

  render() {
  
    let options = this.props.butterflies.map(butterfly => {
      return(
        <option 
          key={butterfly.id} 
          value={butterfly.id}>
          {butterfly.name}
        </option>
      )
    })
  
    return (
      <form className='m-4'>
        <h3>Record Your Butterfly Sighting!</h3>
        <div className='form-group'>
          <label htmlFor="search">Search for your butterfly</label>
          <select 
            id='id' 
            multiple
            className="form-control"
            onChange={(e)=>this.setState({ butterfly_id: e.target.value })}
            required>
            {options}
          </select>
        </div>
        <div className='formgroup'>
          <label htmlFor="date">Date spotted</label>
          <input 
            className='form-control'
            value={ this.state.date_sighted } 
            type="date"
            onChange={(e)=>this.setState({ date_sighted: e.target.value })}/>
        </div>
        <div className='formgroup'>
          <label htmlFor="location">Where did you see it?</label>
          <input 
            className='form-control' 
            value={ this.state.location }
            type="text"
            onChange={(e)=>this.setState({ location: e.target.value })}/>
        </div>
        <div className='formgroup'>
          <label htmlFor="notes">Notes</label>
          <textarea 
            rows='3' 
            className='form-control'
            value={ this.state.notes } 
            type="text"
            onChange={(e)=>this.setState({ notes: e.target.value })}/>
        </div>
        <div className='formgroup'>
          <label htmlFor="seen by">Your name (or alias)</label>
          <input 
            className='form-control' 
            type="text"
            value={ this.state.sighted_by }
            onChange={(e)=>this.setState({ sighted_by: e.target.value })}/>
        </div>  
        <button onClick={()=>this.submitSighting()}className='btn btn-success mt-2'>Submit!</button>
        <p className='mt-4'>No matching butterfly? <Link to='/newbutterfly'><button className='btn btn-info'>Add a new butterfly</button></Link></p>
      </form>
    );
  }
}

export default NewSighting;