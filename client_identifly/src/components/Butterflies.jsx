import React, { Component } from 'react';

class Butterflies extends Component {


  render() {
    let butterflyList = this.props.types.map(type => {
      return type.butterflies.map(butterfly => {
        return(
          <div className='border m-2 p-2' key={butterfly.id}>
            <h3>{butterfly.name}</h3>
            <h4>{butterfly.scientific_name}</h4>
            <p>{butterfly.region}</p>
            <p>{butterfly.description}</p>
            <p>{butterfly.behavior}</p>
          </div>
          )
        })
      })
    console.log(butterflyList)
    return (
      <div className='p-4 col'>
        {butterflyList}
      </div>
    );
  }
}

export default Butterflies;