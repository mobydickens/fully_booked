import React, { Component } from 'react';

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
        <h3>Browse Types</h3>
        {typesList}
      </div>
    );
  }
}

export default TypesSidebar;