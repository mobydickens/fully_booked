import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TypesSidebar extends Component {

  render() {
    let typesList = this.props.types.map(type => {
      return(
        <div className='back-hover pointer' key={type.id}>
          <p onClick={ ()=>this.props.filterFn( type.id )}>{type.type}</p>
        </div>
      )
    })

    return (
      <div className='p-4 col-lg-2'>
        <Link to='/newbutterfly'><button className='btn btn-success mb-4'>Add missing butterfly</button></Link>
        <Link to='/sightings'><button className='btn btn-info mb-4'>Sightings</button></Link>
        <h3>Browse Types</h3>
        <p onClick={() => this.props.filterFn("All")} className='back-hover pointer'>See All</p>
        {typesList}
      </div>
    );
  }
}

export default TypesSidebar;