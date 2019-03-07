import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TypesSidebar extends Component {

  render() {
    let typesList = this.props.types.map(type => {
      return(
        <div key={type.id}>
          <p>{type.type}</p>
        </div>
      )
    })

    return (
      <div className='p-4 col-lg-2'>
        <Link to='/newbutterfly'><button className='btn btn-success mb-4'>Add missing butterfly</button></Link>
        <h3>Browse Types</h3>
        {typesList}
      </div>
    );
  }
}

export default TypesSidebar;