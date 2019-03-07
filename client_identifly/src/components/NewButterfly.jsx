import React, { Component } from 'react';
import Header from './Header';
import californiat from '../pictures/California-Tortoiseshell.jpg';
import axios from 'axios';

class NewButterfly extends Component {

  state = {
    types: [],
    name: '',
    scientificName: '',
    region: '',
    type: '',
    description: '',
    behavior: '',
    photo_url: '',
    foodplants: ''
  }

  async componentDidMount() {
    let res = await axios.get('/types');
    this.setState({
      types: res.data
    })
  }

  async submitButterfly() {
    let { name, scientificName, region, type, description, behavior, photo_url, foodplants } = this.state;
    let res = await axios.post('/newbutterfly', 
      {
        name: name, 
        scientific_name: scientificName,
        region: region,
        type: type,
        description: description,
        behavior: behavior,
        photo_url: photo_url,
        larvel_foodplants: foodplants   
      });
    if (res) {
      this.setState({
        name: '',
        scientificName: '',
        region: '',
        type: '',
        description: '',
        behavior: '',
        photo_url: '',
        foodplants: ''
      })
    }
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
        <Header />
        <div className='container-fluid mt-2'>
          <div className='row'>
            <form className='col m-4'>
              <h3>Add a missing butterfly</h3>
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
                onClick={ ()=>this.submitButterfly()}>Submit</button>
            </form>
            <div className="col-md-3 mr-4 mt-5">
              <img className='card-img-top rounded' src={californiat} alt="cali-tortoiseshell"/>
              <div className="card-body">
                <h4 className="card-text">California Tortoiseshell</h4>
              </div>
            </div>    
          </div>
        </div>
      </div>
    );
  }
}

export default NewButterfly;