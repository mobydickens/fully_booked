import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Editor extends Component {

  state = {
    name: '',
    scientificName: '',
    region: '',
    type: '',
    description: '',
    behavior: '',
    foodplants: '',
    photo_url: '',
    types: []
  }

  componentDidMount =  async () => {
    let res = await axios.get(`/onebutterfly/${this.props.butterflyId}`);
    let res2 = await axios.get('/types');
    this.setState({
      name: res.data.name,
      scientificName: res.data.scientific_name,
      region: res.data.region,
      description: res.data.description,
      behavior: res.data.behavior,
      foodplants: res.data.larvel_foodplants,
      photo_url: res.data.photo_url,
      types: res2.data
    })
  }

  saveChangesToButterfly = async () => {
    this.props.backButton();
  }

  render() {
    let options = this.state.types.map(type => {
      return(
        <option value={type.id} key={type.id}>
          {type.type}
        </option>
      )
    })

    return (
      <div>
        <div className='d-flex'>
          <h3>Edit this butterfly</h3>
          <button className='ml-4 btn btn-secondary' onClick={() => this.props.backButton()}>back</button>
        </div>
        <form className='p-4 mt-4 col border border-secondary'>
          <div className='form-row pl-2'>
            <div className='form-group col'>
              <label htmlFor='name'>Name</label>
              <input 
                className='form-control' 
                type="text" 
                id='name'
                onChange={(e)=>this.setState({ name: e.target.value })}
                required
                value={this.state.name} />
            </div>
            <div className='form-group col'>
              <label htmlFor='sci-name'>Scientific Name</label>
              <input 
                className='form-control' 
                type="text" 
                id='sci-name'
                onChange={(e)=>this.setState({ scientificName: e.target.value })}
                required
                value={this.state.scientificName} />
            </div>
          </div>
          <div className='form-row pl-2'>
            <div className='form-group col'>
              <label htmlFor='type'>Type</label>
              <select 
                id='type' 
                multiple 
                className="form-control"
                onChange={(e)=>this.setState({ type: e.target.value })}
                required>
                {options}
              </select>
            </div>
            <div className='form-group col'>
              <label htmlFor='region'>Region</label>
              <input 
                className='form-control' 
                type="text" 
                id='region'
                onChange={(e)=>this.setState({ region: e.target.value })}
                required
                value={this.state.region} />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea 
              className='form-control' 
              rows='3' 
              type="text" 
              id='description'
              onChange={(e)=>this.setState({ description: e.target.value })}
              required
              value={this.state.description} />
          </div>
          <div className='form-group'>
            <label htmlFor='behavior'>Behavior</label>
            <textarea 
              className='form-control' 
              rows='3' 
              type="text" 
              id='behavior'
              onChange={(e)=>this.setState({ behavior: e.target.value })}
              required
              value={this.state.behavior} />
          </div>
          <div className='form-group'>
            <label htmlFor='foodplants'>Larvel Foodplants</label>
            <input 
              className='form-control' 
              type="text" 
              id='foodplants'
              onChange={(e)=>this.setState({ foodplants: e.target.value })}
              required
              value={this.state.foodplants} />
          </div>
          <div className='form-group'>
            <label htmlFor='image'>Image URL</label>
            <input 
              className='form-control' 
              type="text" 
              id='image'
              onChange={(e)=>this.setState({ photo_url: e.target.value })}
              required
              value={this.state.photo_url} />
          </div>
          <button 
            className='btn btn-success'
            onClick={ ()=>this.saveChangesToButterfly() }>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Editor);