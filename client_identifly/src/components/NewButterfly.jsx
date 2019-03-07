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
    behavior: ''
  }

  async componentDidMount() {
    let res = await axios.get('/types');
    this.setState({
      types: res.data
    })
  }

  render() {
    let options = this.state.types.map(type => {
      return(
        <option key={type.id}>
          {type.type}
        </option>
      )
    })

    return (
      <div>
        <Header />
        <div className='container-fluid mt-5'>
          <div class='row'>
            <form className='col m-4'>
              <h3>Add a missing butterfly</h3>
              <div className='form-row pl-2'>
                <div className='form-group col'>
                  <label for='name'>Name</label>
                  <input className='form-control' type="text" id='name'/>
                </div>
                <div className='form-group col'>
                  <label for='sci-name'>Scientific Name</label>
                  <input className='form-control' type="text" id='sci-name'/>
                </div>
              </div>
              <div className='form-row pl-2'>
                <div className='form-group col'>
                  <label for='type'>Type</label>
                  <select id='type' multiple className="form-control">
                    {options}
                  </select>
                </div>
                <div className='form-group col'>
                  <label for='region'>Region</label>
                  <input className='form-control' type="text" id='region'/>
                </div>
              </div>
              <div className='form-group'>
                <label for='description'>Description</label>
                <textarea className='form-control' rows='3' type="text" id='description'/>
              </div>
              <div className='form-group'>
                <label for='behavior'>Behavior</label>
                <textarea className='form-control' rows='3' type="text" id='behavior'/>
              </div>
              <button className='ml-4 btn btn-success' type='submit'>Submit</button>
            </form>
            <div class="col-md-3 mr-4">
              <img className='card-img-top rounded' src={californiat} alt="cali-tortoiseshell"/>
              <div class="card-body">
                <h4 class="card-text">California Tortoiseshell</h4>
              </div>
            </div>    
          </div>
        </div>
      </div>
    );
  }
}

export default NewButterfly;