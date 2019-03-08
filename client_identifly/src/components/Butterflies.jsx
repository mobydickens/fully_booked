import React, { Component } from 'react';

class Butterflies extends Component {


  render() {
    let butterflyList = this.props.types.map(type => {
      return type.butterflies.map(butterfly => {
        return(
          <div key={butterfly.id} className='d-flex border m-4 p-4'>
            <div>
              <h3>{butterfly.name}</h3>
              <h4>{butterfly.scientific_name}</h4>
              <p>{butterfly.region}</p>
              <p>Description: {butterfly.description}</p>
              <p>Behavior: {butterfly.behavior}</p>
            </div>
            <div>
              <img className='img-fluid rounded' src={butterfly.photo_url} alt="butterfly"/>
            </div>
          </div>
          )
        })
      })

    let filteredList = this.props.types.map(type => {
      return type.butterflies.map(butterfly => {
        if(butterfly.type_id === this.props.filteredType) {
        return(
          <div key={butterfly.id} className='d-flex border m-4 p-4'>
            <div>
              <h3>{butterfly.name}</h3>
              <h4>{butterfly.scientific_name}</h4>
              <p>{butterfly.region}</p>
              <p>Description: {butterfly.description}</p>
              <p>Behavior: {butterfly.behavior}</p>
            </div>
            <div>
              <img className='img-fluid rounded' src={butterfly.photo_url} alt="butterfly"/>
            </div>
          </div>
          )}
        })
    })
    
    return (
      <div className='p-4 col'>
        { this.props.filteredType === 'All' ?
        butterflyList
        : 
        filteredList
        }
      </div>
    );
  }
}

export default Butterflies;